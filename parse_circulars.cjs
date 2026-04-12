const fs = require('fs');
const cheerio = require('cheerio');
const mongoose = require('mongoose');

const MONGODB_URI = "mongodb://127.0.0.1:27017/chavadiconsult";

const circularSchema = new mongoose.Schema({
  title: { type: String, required: true },
  url: { type: String, required: true },
  department: { type: String, required: true },
  subDepartment: { type: String },
  isNewBadge: { type: Boolean, default: false },
}, { timestamps: true });

const Circular = mongoose.models.Circular || mongoose.model('Circular', circularSchema);

async function run() {
  await mongoose.connect(MONGODB_URI);
  console.log("Connected to MongoDB for Seeding Circulars.");

  const html = fs.readFileSync('live_circulars.html', 'utf-8');
  const $ = cheerio.load(html);
  
  const circulars = [];

  // Assuming an accordion structure
  $('.accordion-item').each((i, el) => {
    // Top-level department text (usually in .accordion-button)
    // We only want the direct button, not sub-accordion buttons inside
    const deptBtn = $(el).children('.accordion-header').find('.accordion-button').first();
    if (deptBtn.length === 0) return;
    
    const department = deptBtn.text().trim();
    
    // Some accordions have sub-accordions (like BBMP)
    // Check if there are sub-accordions inside the collapse body
    const collapseBody = $(el).children('.accordion-collapse');
    const subAccordions = collapseBody.find('.accordion-item');

    if (subAccordions.length > 0) {
      // Loop over sub accordions
      subAccordions.each((j, subEl) => {
        const subDeptBtn = $(subEl).children('.accordion-header').find('.accordion-button').first();
        const subDepartment = subDeptBtn.text().trim();
        
        $(subEl).find('ul.circular-list li a').each((k, linkEl) => {
          extractLink($, linkEl, department, subDepartment, circulars);
        });
      });
      
      // Also look for direct links not in sub-accordions just in case
      collapseBody.children('.accordion-body').children('ul.circular-list').find('li a').each((k, linkEl) => {
        extractLink($, linkEl, department, null, circulars);
      });
      
    } else {
      // No sub-accordions
      $(el).find('ul.circular-list li a').each((k, linkEl) => {
        extractLink($, linkEl, department, null, circulars);
      });
    }
  });

  function extractLink($, linkEl, department, subDepartment, resultsArr) {
     const href = $(linkEl).attr('href');
     if (!href) return;
     const hasNewBadge = $(linkEl).find('.new-badge').length > 0;
     
     // Remove the new badge text from title
     $(linkEl).find('.new-badge').remove();
     const title = $(linkEl).text().trim().replace(/\\n/g, ' ').replace(/\\s+/g, ' ');

     if (title && href) {
         resultsArr.push({
             title,
             url: href,
             department,
             subDepartment,
             isNewBadge: hasNewBadge
         });
     }
  }

  // Remove duplicates strictly by url and title just in case of over-scraping
  const uniqueUrls = new Set();
  const finalCirculars = circulars.filter(c => {
    if (uniqueUrls.has(c.url + c.title)) return false;
    uniqueUrls.add(c.url + c.title);
    return true;
  });

  console.log(`Found ${finalCirculars.length} unique circulars.`);

  await Circular.deleteMany({});
  if (finalCirculars.length > 0) {
    await Circular.insertMany(finalCirculars);
    console.log("Successfully seeded circulars to MongoDB.");
  } else {
    console.log("No circulars found. Check DOM scraper logic.");
  }
  
  await mongoose.disconnect();
}

run().catch(console.error);
