import cron from 'node-cron';
import { CategoryToScrape, CategoryToScrapeObject } from './categories';
import { scrapeSimpleExtInfo } from './scrapeSimpleExtInfo';
import { storeSimpleExtInfo } from './storeSimpleExtInfo';
import { loadSimpleExtensionInfo } from './loadSimpleExtensionInfo';
import { scrapeDetailedExtInfo } from './scrapeDetailedExtInfo';
import { storeDetailedExtensions } from './storeDetailedExtInfo';
import prisma from "./prisma"
import { acquireLock, releaseLock } from './lockAndRelease/scraperLockAndRelease';
import { logger } from './logger';

  
  async function scrapeAndStoreSimpleInfo(pages?: number) {
    for (const categoryToScrape in CategoryToScrapeObject) {
      try {
        const simpleInfoSet = await scrapeSimpleExtInfo(categoryToScrape as CategoryToScrape, pages)
        await storeSimpleExtInfo(simpleInfoSet)
      } catch (error) {
        logger.error(`Error scraping simple info for category ${categoryToScrape}:`, error);
      } 
    }
  }
  
  async function scrapeAndStoreDetailedInfoInBatches(limit?: number) {
    let skip = 0;
    let hasMore = true;
    const batchSize = 32
    while (hasMore && (limit ? skip < limit : true)) {
      const extensions = await loadSimpleExtensionInfo(batchSize, skip);
      
      if (extensions.length === 0) {
        hasMore = false;
        break;
      }
  
      try {
        const detailedExtensions = await scrapeDetailedExtInfo(extensions, limit);
        await storeDetailedExtensions(detailedExtensions);
        logger.info(`Processed batch of ${extensions.length} extensions`);
      } catch (error) {
        logger.error(`Error processing batch starting at index ${skip}:`, error);
      }
  
      skip += batchSize;
    }
  
    logger.info('Finished processing all extensions');
  }

export async function scrapeAndStoreAll() {
    if (!(await acquireLock())) {
        logger.info('Another job is in progress or was recently run. Skipping.');
        return;
        }


  try {
    logger.info('Cron: Starting scrape job... on production: ' + isProduction);
    const start = performance.now();  

    if(isProduction) {
      await scrapeAndStoreSimpleInfo()
      await scrapeAndStoreDetailedInfoInBatches()
    } else {
      const pagesPerCategory = 2
      await scrapeAndStoreSimpleInfo(pagesPerCategory)  
      const limit = 2
      await scrapeAndStoreDetailedInfoInBatches(limit)
    }
  
    const end = performance.now();
    logger.info(`Scraped and stored extensions in: ${((end - start) / 60000).toFixed(2)} minutes`);
  
    await prisma.$disconnect()
    // Your existing scraping logic here
    logger.info('Cron: Scrape job completed successfully.');
  } catch (error) {
    logger.error('Error during scrape job:', error);
  } finally {
    await releaseLock();
  }

  
}

// Check if environment is production or development
const isProduction = process.env.NODE_ENV === 'production';

// Run at 1:00 AM on Monday, Wednesday, and Friday
const cronExpression = isProduction ? '0 1 * * 1,3,5' : '*/10 * * * * *';

// Initialize the cron job
const job = cron.schedule(
  cronExpression,
  async () => {
    try {
      await scrapeAndStoreAll();
    } catch (error) {
      logger.error('Error running cronJob: cronScrapeAndStoreAll:', error);
    }
  },
  {
    scheduled: true,
  },
);

export default job;
