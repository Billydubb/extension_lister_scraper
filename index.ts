import { formatNumberOfRatings } from "./formatNumberOfRatings.js"
import { loadSimpleExtensionInfo } from "./loadSimpleExtensionInfo.js"
import { scrapeDetailedExtInfo } from "./scrapeDetailedExtInfo.js"
import prisma from "../chrome-webstore-next/prisma/prisma.ts"
import { CategoryToScrapeObject } from "./categories.ts"
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
  const simpleInfoSet = await scrapeSimpleExtInfo("DEVELOPER_TOOLS", 10)
  await storeSimpleExtInfo(simpleInfoSet)


  // const extensions = await loadSimpleExtensionInfo(32)
  // console.log(extensions)
  // console.log(extensions)
  // const detailedExtensions = await scrapeDetailledExtInfo(extensions)
  // await storeDetailedExtensions(detailedExtensions)

  


}

init()