import puppeteer from 'puppeteer';

export const scrapeDetailedExtInfo = async (extensions) => {
  // Launch the browser
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  const detailedExtensions = [];
  for (const ext of extensions) {
    const extensionPageUrl = `https://chrome.google.com/webstore/detail/${ext.id}`;
    await page.goto(extensionPageUrl, { waitUntil: 'networkidle2' });

    const detailedData = await page.evaluate(() => {
      const websiteUrlAnchorElement = document.querySelector('div.kYv2db a.cJI8ee');
      const websiteUrl = websiteUrlAnchorElement ? websiteUrlAnchorElement.getAttribute("href") : "No url"
      const usersDivelement = document.querySelector('div.F9iKBc');
      let numberOfUsers = usersDivelement ? usersDivelement.innerText?.split("\n").pop() : undefined
      if(numberOfUsers) {
        const numberString = numberOfUsers.match(/[\d,]+/)[0]; // Extracts the number part with commas
        numberOfUsers = numberString.replace(/,/g, ''); 
      }

      const categories = []
      document.querySelectorAll("div.F9iKBc a").forEach(categoryElement => {
        categories.push(categoryElement.innerText)
      })

      let longDescription = ""
      document.querySelectorAll("div.JJ3H1e")[0].childNodes.forEach(descriptionElements => {
        longDescription = longDescription + descriptionElements.innerText + "\n"
      })

      let lastUpdated = ""
      document.querySelectorAll("div.im4wIf ul.v7vKf li.ZbWJPd.uBIrad div").forEach(el => {
        if(!el.innerText.includes("Updated")) {
          lastUpdated = el.innerText
        }
      })

      const versionDivElement = document.querySelector('li.ZbWJPd.ecmXy div.N3EXSc');
      const version = versionDivElement ? versionDivElement.innerText : "No version"

      const languages = []
      // This query only gets the languages if there are so many that it is shown as a tooltip
      // TODO: find extensions with few enough languages so that they are styled differently and scrape those too.
      document.querySelectorAll(".UT2P2b").forEach((el) => {
        const text = el.innerText.trim();
        if (text && text !== ',') {
          languages.push(text);
        }
      })

      const isFeaturedElement = document.querySelector(".OmOMFc")
      const isFeatured = isFeaturedElement ? isFeaturedElement.innerText : false

      const featuresElement = Array.from(document.querySelectorAll(".nws2nb")).find((el) => {
        return el.innerText === "Features"
      })

      let offersInAppPurchases = false;
      let sibling = featuresElement?.nextElementSibling;
      while (sibling) {
        if (sibling.innerText.includes("Offers in-app purchases")) {
          offersInAppPurchases = true; 
          break; // Exit the loop when the desired element is found
        }
        sibling = sibling.nextElementSibling; // Move to the next sibling
      }


      return {
        websiteUrl,
        numberOfUsers,
        categories,
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
      categories: detailedData.categories,
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
