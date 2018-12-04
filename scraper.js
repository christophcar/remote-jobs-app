const fs = require('fs')
const path = require('path')
const puppeteer = require('puppeteer')
const async = require('async')
;(async () => {
  const browser = await puppeteer.launch({ headless: true })
  const page = await browser.newPage()
  await page.goto(
    'https://www.stepstone.de/5/ergebnisliste.html?stf=freeText&ns=1&qs=%5B%7B%22id%22%3A%22231794%22%2C%22description%22%3A%22Frontend-Entwickler%2Fin%22%2C%22type%22%3A%22jd%22%7D%2C%7B%22id%22%3A%22300000115%22%2C%22description%22%3A%22Deutschland%22%2C%22type%22%3A%22geocity%22%7D%5D&companyID=0&cityID=300000115&sourceOfTheSearchField=homepagemex%3Ageneral&searchOrigin=Homepage_top-search&ke=Frontend-Entwickler%2Fin&ws=Deutschland&ra=30'
  )

  const stepstone = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.job-element')).map(card => {
      const id = card.querySelector('time').getAttribute('datetime')
      const href = card
        .querySelector('.job-element__body > a')
        .getAttribute('href')
      const position = card
        .querySelector('.job-element__body__title')
        .textContent.trim()
        .replace(/^(.{45}[^\s]*).*/, '$1')
      const company = card
        .querySelector('.job-element__body__company')
        .textContent.trim()
        .replace(/^(.{20}[^\s]*).*/, '$1')
      const image_element = card.querySelector('.job-element__logo img')
      const image = image_element.dataset.src
        ? `https://www.stepstone.de${image_element.dataset.src}`
        : image_element.src
      const date = card.querySelector('time').getAttribute('datetime')

      return {
        id,
        position,
        company,
        image,
        date,
        href
      }
    })
  })

  const newStepstone = async.mapSeries(
    stepstone,
    async stone => {
      await page.goto(stone.href)
      const details = await page.evaluate(() => {
        const cards = Array.from(document.querySelectorAll('.card__body'))
        return cards
          .map(card => {
            const title = card.querySelector('.card__title')
            const body = card.querySelector('.richtext')
            return {
              title: title ? title.textContent : null,
              body: body ? body.textContent : null
            }
          })
          .filter(cardData => cardData.title && cardData.body)
      })

      return {
        ...stone,
        details
      }
    },
    async (err, result) => {
      err && console.error(err)
      console.log(result)
      await writeFile(result)
      await browser.close()
    }
  )

  await Promise.all(newStepstone).catch(err => console.error('ERROR', err))

  function writeFile(content) {
    return new Promise((resolve, reject) => {
      fs.writeFile(
        path.join(__dirname, 'src/stepstone.json'),
        JSON.stringify(content),
        err => {
          if (err) {
            console.error(err)
            reject(err)
          } else {
            console.log('Great, it worked!')
            resolve('it worked')
          }
        }
      )
    })
  }
})()
