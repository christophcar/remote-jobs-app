const puppeteer = require('puppeteer')

export default function scrape() {
  ;(async () => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(
      'https://www.stepstone.de/5/ergebnisliste.html?ke=frontend&ws=Deutschland&qs=%5B%7B%22id%22%3A%22300000115%22%2C%22description%22%3A%22Deutschland%22%2C%22type%22%3A%22geocity%22%7D%5D&cityid=300000115&li=100&of=0&suid=d7a016b6-db3e-4183-bedc-aa73aba850b0&an=resultPerPageChanged'
    )

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
