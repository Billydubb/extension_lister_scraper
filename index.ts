import { formatNumberOfRatings } from "./formatNumberOfRatings.js"
import { loadSimpleExtensionInfo } from "./loadSimpleExtensionInfo.js"
import { scrapeDetailedExtInfo } from "./scrapeDetailedExtInfo.js"
import prisma from "../chrome-webstore-next/prisma/prisma.ts"
import { CategoryToScrape, CategoryToScrapeObject } from "./categories.ts"
import { scrapeSimpleExtInfo } from "./scrapeSimpleExtInfo.ts"
import { storeDetailedExtensions } from "./storeDetailedExtInfo.js"
import { storeSimpleExtInfo } from "./storeSimpleExtInfo.js"


/**
 * -> Scrape simple extension info 
 * -> Store simple extension info (only if the info has changed)
 * -> Load simple extension info
 * -> Scrape detailed extension info
 * -> Store detailed extension info (only if the info has changed)
 * 
 */  

async function init() {
  
  // const pagesPerCategory = 2
  // await scrapeAndStoreSimpleInfo(pagesPerCategory)
  // For testing
  const limit = 2
  await scrapeAndStoreDetailedInfoInBatches(limit)

}

async function scrapeAndStoreSimpleInfo(pages?: number) {
  for (const categoryToScrape in CategoryToScrapeObject) {
    const simpleInfoSet = await scrapeSimpleExtInfo(categoryToScrape as CategoryToScrape, pages)
    await storeSimpleExtInfo(simpleInfoSet)
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
      // Optionally implement retry logic here
    }

    skip += batchSize;
  }

  console.log('Finished processing all extensions');
}

init()