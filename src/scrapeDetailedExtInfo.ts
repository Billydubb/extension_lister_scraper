import puppeteer from 'puppeteer';
import { logger } from './logger';
import { deleteExtension } from './deleteExtension';

export const scrapeDetailedExtInfo = async (extensions, limit?: number) => {
  // Launch the browser
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  try {
    logger.info("Scraping detailed extension info")


  const detailedExtensions: any[] = [];
  for (const ext of extensions) {

    if(limit && detailedExtensions.length >= limit) {
      break
    }

    logger.info(`...for extension id:  ${ext.id}`)
    const extensionPageUrl = `https://chrome.google.com/webstore/detail/${ext.id}`;
    await page.goto(extensionPageUrl, { waitUntil: 'networkidle2' });

    const detailedData = await page.evaluate(() => {

      // if "This item is not available" is in the page, return undefined
      if(document.querySelector(".eFHPDf")?.textContent?.includes("This item is not available")) {
        return undefined
      }

      const websiteUrlAnchorElement = document.querySelector('div.kYv2db a.cJI8ee');
      const websiteUrl = websiteUrlAnchorElement ? websiteUrlAnchorElement.getAttribute("href") : "No url"
      const usersDivelement = document.querySelector('div.F9iKBc');
      let numberOfUsers = usersDivelement ? usersDivelement.textContent?.split("\n").pop() : undefined
      if(numberOfUsers) {
        const numberString = numberOfUsers.match(/[\d,]+/)?.[0]; // Extracts the number part with commas
        numberOfUsers = numberString?.replace(/,/g, ''); 
      }

      let longDescription = ""
      document.querySelectorAll("div.JJ3H1e")[0].childNodes.forEach(descriptionElements => {
        longDescription = longDescription + descriptionElements.textContent + "\n"
      })

      let lastUpdated = ""
      document.querySelectorAll("div.im4wIf ul.v7vKf li.ZbWJPd.uBIrad div").forEach(el => {
        if(!el.textContent?.includes("Updated")) {
          lastUpdated = el.textContent ?? ""
        }
      })

      const versionDivElement = document.querySelector('li.ZbWJPd.ecmXy div.N3EXSc');
      const version = versionDivElement ? versionDivElement.textContent : "No version"

      const languages: string[] = []
      
      document.querySelectorAll(".UT2P2b").forEach((el) => {
        const text = el.textContent?.trim();
        if (text && text !== ',') {
          languages.push(text);
        }
      })
      
      // If the languages array is empty, that means there is only one language
      // So we need to get it this way
      if(languages.length === 0) {
        const languageParentElement = document.querySelector(".ZbWJPd.FFG5Td")
        if(languageParentElement) {
          const languageElement = languageParentElement.children[1]
          if(languageElement) {
            const text = languageElement.textContent?.trim();
            if (text && text !== ',') {
            languages.push(text);
          }
          }
        }
      }

      const isFeaturedElement = document.querySelector(".OmOMFc")
      const isFeatured = isFeaturedElement ? isFeaturedElement.textContent : false

      const featuresElement = Array.from(document.querySelectorAll(".nws2nb")).find((el) => {
        return el.textContent === "Features"
      })

      let offersInAppPurchases = false;
      let sibling = featuresElement?.nextElementSibling;
      while (sibling) {
        if (sibling.textContent?.includes("Offers in-app purchases")) {
          offersInAppPurchases = true; 
          break; // Exit the loop when the desired element is found
        }
        sibling = sibling.nextElementSibling; // Move to the next sibling
      }


      return {
        websiteUrl,
        numberOfUsers,
        longDescription,
        lastUpdated,
        version,
        languages,
        isFeatured,
        offersInAppPurchases
      };
    });

    if(!detailedData) {
      logger.info(`Deleting extension ${ext.id} from DB because it is not available in the chrome web store`)
      deleteExtension(ext.id)
      continue
    }

    detailedExtensions.push({
      ...ext,
      numberOfUsers: detailedData.numberOfUsers,
      longDescription: detailedData.longDescription,
      languages: detailedData.languages,
      lastUpdated: detailedData.lastUpdated,
      websiteUrl: detailedData.websiteUrl,
      version: detailedData.version,
      isFeatured: detailedData.isFeatured,
      offersInAppPurchases: detailedData.offersInAppPurchases
    });
  }

  // Close the browser
  await browser.close();

  // Print the scraped data
  logger.info(detailedExtensions);
  return detailedExtensions
  } catch (error) {
    logger.error(error)
    await browser.close()
  } finally {
    await browser.close()
  }
};
