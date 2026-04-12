const fs = require('fs');
const cheerio = require('cheerio');
const mongoose = require('mongoose');

const MONGODB_URI = "mongodb://127.0.0.1:27017/chavadiconsult";

const clientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  imageUrl: { type: String, required: true },
  mapUrl: { type: String },
}, { timestamps: true });

const Client = mongoose.models.Client || mongoose.model('Client', clientSchema);

async function run() {
  await mongoose.connect(MONGODB_URI);
  console.log("Connected to MongoDB for Seeding Clients.");

  const html = fs.readFileSync('live_clients.html', 'utf-8');
  const $ = cheerio.load(html);
  
  const clients = [];

  $('.property-item').each((i, el) => {
    const $el = $(el);
    const mapUrl = $el.find('a.img').attr('href') || '';
    const rawImageUrl = $el.find('img').attr('src');
    const imageUrl = rawImageUrl.startsWith('/') ? rawImageUrl : `/${rawImageUrl}`;
    const name = $el.find('.property-content .price span').text().trim();
    const address = $el.find('.property-content .text-black-50').text().trim();

    if (name && address && imageUrl) {
        clients.push({ name, address, imageUrl, mapUrl: mapUrl === 'property-single.html' ? '' : mapUrl });
    }
  });

  console.log(`Found ${clients.length} clients.`);

  await Client.deleteMany({});
  if (clients.length > 0) {
    await Client.insertMany(clients);
    console.log("Successfully seeded clients to MongoDB.");
  } else {
    console.log("No clients found, check DOM scraper.");
  }
  
  await mongoose.disconnect();
}

run().catch(console.error);
