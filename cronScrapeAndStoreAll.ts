import cron from 'node-cron';
import { CategoryToScrape, CategoryToScrapeObject } from './categories';
import { scrapeSimpleExtInfo } from './scrapeSimpleExtInfo';
import { storeSimpleExtInfo } from './storeSimpleExtInfo';
import { loadSimpleExtensionInfo } from './loadSimpleExtensionInfo';
import { scrapeDetailedExtInfo } from './scrapeDetailedExtInfo';
import { storeDetailedExtensions } from './storeDetailedExtInfo';
import prisma from "./prisma"
import { acquireLock, releaseLock } from './lockAndRelease/scraperLockAndRelease';

  
  async function scrapeAndStoreSimpleInfo(pages?: number) {
    for (const categoryToScrape in CategoryToScrapeObject) {
      try {
        const simpleInfoSet = await scrapeSimpleExtInfo(categoryToScrape as CategoryToScrape, pages)
        await storeSimpleExtInfo(simpleInfoSet)
      } catch (error) {
        console.error(`Error scraping simple info for category ${categoryToScrape}:`, error);
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
        console.log(`Processed batch of ${extensions.length} extensions`);
      } catch (error) {
        console.error(`Error processing batch starting at index ${skip}:`, error);
      }
  
      skip += batchSize;
    }
  
    console.log('Finished processing all extensions');
  }

export async function scrapeAndStoreAll() {
    if (!(await acquireLock())) {
        console.log('Another job is in progress or was recently run. Skipping.');
        return;
        }


  try {
    console.log('Cron: Starting scrape job...');
    const start = performance.now();  
    const pagesPerCategory = 2
    // await scrapeAndStoreSimpleInfo(pagesPerCategory)
    await scrapeAndStoreSimpleInfo()
  
    // For testing
    // const limit = 2
    // await scrapeAndStoreDetailedInfoInBatches(limit)
  
    //For production
    await scrapeAndStoreDetailedInfoInBatches()
  
  
    const end = performance.now();
    console.log(`Scraped and stored extensions in: ${((end - start) / 60000).toFixed(2)} minutes`);
  
    await prisma.$disconnect()
    // Your existing scraping logic here
    console.log('Cron: Scrape job completed successfully.');
  } catch (error) {
    console.error('Error during scrape job:', error);
  } finally {
    await releaseLock();
  }

  
}

// Check if environment is production or development
const isProduction = process.env.NODE_ENV === 'production';


//TODO: figure out how often to run this and then implement the commented out code
// // Schedule cron job
// const cronExpression = isProduction ? '*/5 * * * *' : '*/10 * * * * *';

// // Initialize the cron job
// const job = cron.schedule(
//   cronExpression,
//   async () => {
//     try {
//       await scrapeAndStoreAll();
//     } catch (error) {
//       console.error('Error running cronJob: cronScrapeAndStoreAll:', error);
//     }
//   },
//   {
//     scheduled: true,
//   },
// );

// export default job;
