const fs = require('fs');
const cheerio = require('cheerio');

const html = fs.readFileSync('live_index.html', 'utf-8');
const $ = cheerio.load(html);

console.log("=== HERO IMAGES ===");
$('.hero-slider .item, .owl-carousel .item, .hero .bg-image').each((i, el) => {
  let style = $(el).attr('style') || '';
  console.log(style);
});
$('img').each((i, el)=>{
  const src = $(el).attr('src');
  if(src && src.includes('build') || src.includes('hero') || src.includes('banner')) {
     console.log('Img:', src);
  }
});

console.log("\n=== WHY CHOOSE US ===");
const whySection = $('h2:contains("Why Choose Us")').closest('section, div.container');
console.log(whySection.text().replace(/\s+/g, ' ').substring(0, 1000));

console.log("\n=== MENU / HEADER ===");
const header = $('header, .site-nav, .navbar');
console.log(header.find('a').map((i, el) => $(el).text().trim()).get().join(' | '));
console.log("Header Classes:", header.attr('class'));

console.log("\n=== TOP BAR (if any) ===");
const topbar = $('.top-bar');
console.log(topbar.text().replace(/\s+/g, ' '));

console.log("\n=== CLIENTS ===");
const clientsSection = $('h2:contains("Clients")').closest('section, div.container');
if (clientsSection.length) {
    clientsSection.find('img').each((i, el) => {
        console.log("Client Logo:", $(el).attr('src'));
    });
} else {
    // try finding by class
    $('.client-logo, .client img, .clients img').each((i, el) => {
        console.log("Spec Client Logo:", $(el).attr('src'));
    });
}

