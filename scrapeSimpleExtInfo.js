import puppeteer from 'puppeteer';

export const Category = {
  PRODUCTIVITY_TOOLS: "https://chromewebstore.google.com/category/extensions/productivity/tools"
}

export const scrapeSimpleExtInfo = async (categoryName) => {
  // Launch the browser
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  // await page.setViewport({ width: 2048, height: 1024 });
  
  
  // Open the Chrome Web Store page
  if(!categoryName) {
    url = "https://chromewebstore.google.com/category/extensions/productivity/tools"
  } else {
    url = Category[categoryName]
  }
  await page.goto(url, { waitUntil: 'networkidle2' });

  // Scroll and click 'Load more' until no more new extensions are loaded
  const idAndInfoSet = new Set()
  let lastNumExtensions = 0;
  let counter = 0
  // while (counter < 10) {
  while (counter < 2) {
    try {  // Wait for the button to be visible
      // Wait for the button to be visible
      await page.waitForSelector('button.mUIrbf-LgbsSe', { visible: true, timeout: 5000 });
  
        // Use JavaScript to click the button
      await page.evaluate(() => {
        const button = document.querySelector('button.mUIrbf-LgbsSe');

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
          const rating = ext.querySelector('span.Vq0ZA')?.innerText
          const numberOfRatings = ext.querySelector('span.Y30PE')?.innerText?.replace(/[()]/g, '')
          const shortDescription = ext.querySelector('p.Uufqmb')?.innerText


          return {
            id,
            name,
            rating,
            numberOfRatings,
            shortDescription
          }
        });
        return idsAndInfo;
      });

      console.log(newIdsAndInfo)

      newIdsAndInfo.forEach(newIdAndInfo => idAndInfoSet.add(newIdAndInfo));

      // if(lastNumExtensions >= idAndInfoSet.size) {
      //   counter++
      // } else {
      //   counter = 0
      // }

      counter++

      lastNumExtensions = idAndInfoSet.size;
      console.log("extensions: ", lastNumExtensions)
      console.log("counter: ", counter)


      
      await page.waitForNetworkIdle()
    } catch (e) {
      counter = 10
      console.log(e)
    }
  }

  await browser.close();
  return idAndInfoSet

}