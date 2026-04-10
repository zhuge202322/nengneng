const fs = require('fs');
const axios = require('axios');
const cheerio = require('cheerio');

async function scrape() {
  const dataPath = './src/data/products.json';
  const products = require(dataPath);
  let updatedCount = 0;

  console.log(`Starting scrape of ${products.length} products...`);

  for (let i = 0; i < products.length; i++) {
    const p = products[i];
    try {
      console.log(`[${i+1}/${products.length}] Fetching ${p.sourceUrl}...`);
      const res = await axios.get(p.sourceUrl, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36'
        }
      });
      const $ = cheerio.load(res.data);
      const descElement = $('.fix.prodDesc');
      
      if (descElement.length > 0) {
        // Remove style and script tags
        descElement.find('style, script').remove();
        
        // Fix images
        descElement.find('img').each((idx, el) => {
          const img = $(el);
          const realSrc = img.attr('data-original') || img.attr('org-src') || img.attr('src');
          if (realSrc) {
            let finalSrc = realSrc;
            if (finalSrc.startsWith('//')) {
              finalSrc = 'https:' + finalSrc;
            } else if (finalSrc.startsWith('/')) {
              finalSrc = 'https://www.lcpetrochemical.com' + finalSrc;
            }
            img.attr('src', finalSrc);
          }
          // Remove problematic attributes
          img.removeAttr('data-original');
          img.removeAttr('org-src');
          img.removeAttr('width');
          img.removeAttr('height');
          img.removeAttr('style'); // Remove inline styles that might force dimensions
        });
        
        // Remove hardcoded widths from tables or divs
        descElement.find('table, div, td, th').each((idx, el) => {
           $(el).removeAttr('width');
           $(el).removeAttr('height');
        });

        // Add aspect-ratio classes to iframes
        descElement.find('iframe').each((idx, el) => {
          $(el).addClass('w-full aspect-video');
          let src = $(el).attr('src');
          if(src && src.startsWith('//')) {
            $(el).attr('src', 'https:' + src);
          }
        });

        const newHtml = descElement.html().trim();
        p.description = newHtml;
        updatedCount++;
      } else {
        console.warn(`    WARNING: .fix.prodDesc not found for ${p.sourceUrl}`);
      }
      
      // Save every 10 items or at the end to not lose progress
      if ((i + 1) % 10 === 0 || i === products.length - 1) {
        fs.writeFileSync(dataPath, JSON.stringify(products, null, 2), 'utf-8');
        console.log(`Saved progress (${updatedCount} updated).`);
      }
      
      // Short delay to be polite
      await new Promise(r => setTimeout(r, 200));
      
    } catch (err) {
      console.error(`    ERROR fetching ${p.sourceUrl}:`, err.message);
    }
  }
  
  console.log(`\nScraping complete! Updated ${updatedCount} out of ${products.length} products.`);
}

scrape();
