import puppeteer from 'puppeteer';

export const scrapeDetailedExtInfo = async (extensions, limit?: number) => {
  console.log("Scraping detailed extension info")
  // Launch the browser
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  const detailedExtensions: any[] = [];
  for (const ext of extensions) {

    if(limit && detailedExtensions.length >= limit) {
      break
    }

    console.log(`...for extension id:  ${ext.id}`)
    const extensionPageUrl = `https://chrome.google.com/webstore/detail/${ext.id}`;
    await page.goto(extensionPageUrl, { waitUntil: 'networkidle2' });

    const detailedData = await page.evaluate(() => {
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
  console.log(detailedExtensions);
  return detailedExtensions
};
