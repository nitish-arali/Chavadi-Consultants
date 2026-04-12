const fs = require('fs');
const cheerio = require('cheerio');

const html = fs.readFileSync('live_index.html', 'utf-8');
const $ = cheerio.load(html);

const services = [];

$('.box-feature').each((i, el) => {
  const $el = $(el);
  const rawImageUrl = $el.find('img').attr('src');
  const imgSrc = rawImageUrl ? (rawImageUrl.startsWith('/') ? rawImageUrl : `/${rawImageUrl}`) : '';
  
  // Extract h3 titles
  const h3s = [];
  $el.find('h3').each((_, h3) => {
    h3s.push($(h3).text().trim());
  });

  let title = h3s[0] || '';
  let desc = h3s.length > 1 ? h3s.slice(1).join(' ') : undefined;

  // Sometimes there's special text for KPTCL
  if (title.includes('KPTCL')) {
    title = 'KPTCL / BESCOM / All ESCOMs';
    desc = 'Karnataka Power Transmission Corporation Limited';
  }

  // Extract items
  const items = [];
  $el.find('ul li').each((_, li) => {
      const text = $(li).text().replace(/✔/g, '').replace(/[\u2714\u2713]/g, '').trim();
      let cleaned = text.replace(/^[^a-zA-Z0-9]+/, '').trim();
      if(cleaned) {
        items.push(cleaned);
      }
  });

  if (title) {
    services.push({
      title,
      desc,
      imgSrc,
      items
    });
  }
});

fs.writeFileSync('services.json', JSON.stringify(services, null, 2));
console.log(`Extracted ${services.length} services and saved to services.json.`);
