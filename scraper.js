const fs = require('fs')
const path = require('path')
const puppeteer = require('puppeteer')

;(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto(
    'https://www.stepstone.de/5/ergebnisliste.html?ke=Frontend-Entwickler%2Fin&ws=Deutschland&qs=%5B%7B%22id%22%3A%22231794%22%2C%22description%22%3A%22Frontend-Entwickler%2Fin%22%2C%22type%22%3A%22jd%22%7D%2C%7B%22id%22%3A%22300000115%22%2C%22description%22%3A%22Deutschland%22%2C%22type%22%3A%22geocity%22%7D%5D&cityid=300000115&ob=refdate&suid=36fe6921-9cf8-4be7-ab1e-27a60340c9bb&an=sorting'
  )

  const position = await page.evaluate(() =>
    Array.from(document.querySelectorAll('.job-element')).map(card => {
      const position = card.querySelector('.job-element__body__title').innerText
      const company = card.querySelector('.job-element__body__company')
        .innerText
      const description = card.querySelector('.job-element__body__details')
        .innerText
      const image = card.querySelector('div.job-element__logo img').src
      const date = card.querySelector('time').innerText
      return {
        position,
        company,
        description,
        image,
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
        console.log('Great, it worked!')
      }
    }
  )

  await browser.close()
})()
