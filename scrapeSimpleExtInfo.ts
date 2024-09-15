import puppeteer from 'puppeteer';
import { CategoryToScrape, CategoryToScrapeObject } from './categories';
import { logger } from './logger';


export const scrapeSimpleExtInfo = async (categoryToScrape: CategoryToScrape, limit?: number) => {
  logger.info("Scraping simple extension info for category: ", categoryToScrape)
  // Launch the browser
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  

    // Open the Chrome Web Store page
  await page.goto(CategoryToScrapeObject[categoryToScrape].url, { waitUntil: 'networkidle2' });

  // Scroll and click 'Load more' until no more new extensions are loaded
  const idAndInfoSet = new Set()
  let lastNumExtensions = 0;
  let counter = 0

  const maxCounter = limit || 10
  while (counter < maxCounter) {
    let retryCount = 0;
    while (retryCount < 3) {
      try {
        await page.waitForSelector('button.mUIrbf-LgbsSe', { visible: true, timeout: 5000 });
        break;
      } catch (error) {
        retryCount++;
        if (retryCount === 3) {
          logger.info("Button not found after 3 retries. Breaking loop.");
          counter = maxCounter; // Force exit from outer loop
          break;
        }
      }
    }

    if (counter === maxCounter) break;

    try {
      // Wait for the button to be visible
      await page.waitForSelector('button.mUIrbf-LgbsSe', { visible: true, timeout: 5000 });
  
        // Use JavaScript to click the button
      await page.evaluate(() => {
        const button = document.querySelector('button.mUIrbf-LgbsSe') as HTMLElement;
        if (button) {
          button.click();
        }
      });

      // Extract extensions data
      const newIdsAndInfo = await page.evaluate(() => {
        const extensions = document.querySelectorAll('div[data-item-id]');
        const idsAndInfo = Array.from(extensions).map(ext => {
          const id = ext.getAttribute('data-item-id')
          const name = ext.querySelector('p[title]')?.getAttribute('title');
          const rating = ext.querySelector('span.Vq0ZA')?.textContent
          const numberOfRatings = ext.querySelector('span.Y30PE')?.textContent?.replace(/[()]/g, '')
          const shortDescription = ext.querySelector('p.Uufqmb')?.textContent

          return {
            id,
            name,
            rating,
            numberOfRatings,
            shortDescription,
            category: ""
          }
        });
        return idsAndInfo;
      });

      newIdsAndInfo.forEach(newIdAndInfo => {
        newIdAndInfo.category = CategoryToScrapeObject[categoryToScrape].categoryName
        idAndInfoSet.add(newIdAndInfo)
      });

      // If a limit was given, then stop at the limit, else only stop when the number of extensions doesn't increase
      // for maxCounter (which is 10 by default) times
      if((lastNumExtensions >= idAndInfoSet.size) || !!limit) {
        counter++
      } else {
        counter = 0
      }

      lastNumExtensions = idAndInfoSet.size;
      logger.info("extensions: ", lastNumExtensions)
      logger.info("counter: ", counter)


      
      await page.waitForNetworkIdle()
    } catch (e) {
      counter = maxCounter;
      logger.error(e);
    }
  }

  await browser.close();
  return idAndInfoSet

}