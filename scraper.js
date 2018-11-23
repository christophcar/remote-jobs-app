const puppeteer = require('puppeteer')

;(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto(
    'https://www.stepstone.de/5/ergebnisliste.html?stf=freeText&ns=1&qs=%5B%5D&companyID=0&cityID=0&sourceOfTheSearchField=resultlistpage%3Ageneral&searchOrigin=Resultlist_top-search&ke=Frontend-Entwickler%2Fin&ws=Hamburg&ra=30'
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
