const fs = require('fs')
const path = require('path')
const puppeteer = require('puppeteer')

;(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto(
    'https://www.stepstone.de/5/ergebnisliste.html?stf=freeText&ns=1&qs=%5B%7B%22id%22%3A%22237719%22%2C%22description%22%3A%22Entwickler%2Fin+Frontend%22%2C%22type%22%3A%22jd%22%7D%5D&companyID=0&cityID=0&sourceOfTheSearchField=resultlistpage%3Ageneral&searchOrigin=Resultlist_top-search&ke=Entwickler%2Fin+Frontend&ws=Deutschland&ra=30'
  )

  const position = await page.evaluate(() =>
    Array.from(document.querySelectorAll('.job-element')).map(card => {
      const position = card.querySelector('.job-element__body__title').innerText
      const company = card.querySelector('.job-element__body__company')
        .innerText
      const date = card.querySelector('time').innerText
      return {
        position,
        company,
        date
      }
    })
  )

  // const logo = await page.evaluate(() =>
  //   Array.from(document.querySelectorAll('div.job-element__logo img')).map(
  //     logo => logo.src
  //   )
  // )

  fs.writeFile(
    path.join(__dirname, 'src/stepstone.json'),
    JSON.stringify(position),
    err => {
      if (err) {
        console.error(err)
      } else {
        console.log('it worked!')
      }
    }
  )

  await browser.close()
})()
