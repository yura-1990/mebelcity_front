import fs from 'fs';
import https from 'https';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sitemapUrl = 'https://adminpanel.mebelcity.uz/sitemap.xml';
const outputPath = path.resolve(__dirname, '../public/sitemap.xml');

console.log('Fetching dynamic sitemap from production backend...');

https.get(sitemapUrl, (res) => {
  if (res.statusCode !== 200) {
    console.error(`❌ Failed to fetch sitemap: Status Code ${res.statusCode}`);
    process.exit(1);
  }

  const fileStream = fs.createWriteStream(outputPath);
  res.pipe(fileStream);

  fileStream.on('finish', () => {
    fileStream.close();
    console.log('✅ Static sitemap.xml successfully fetched and written to public/sitemap.xml!');
  });
}).on('error', (err) => {
  console.error(`❌ Error fetching sitemap: ${err.message}`);
  process.exit(1);
});
