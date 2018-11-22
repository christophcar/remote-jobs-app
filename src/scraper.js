const puppeteer = require('puppeteer')

export default function scrape() {
  ;(async () => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto('https://www.example.de/jobs/javascript')

    const position = await page.evaluate(() =>
      Array.from(document.querySelectorAll('h2')).map(
        position => position.innerText
      )
    )

    // const logo = await page.evaluate(() =>
    //   Array.from(document.querySelectorAll('div.job-element__logo img')).map(
    //     logo => logo.src
    //   )
    // )

    console.log(JSON.stringify(position))

    await browser.close()
  })()
}
