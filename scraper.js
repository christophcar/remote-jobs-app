const fs = require('fs')
const path = require('path')
const puppeteer = require('puppeteer')
const async = require('async')
;(async () => {
  const browser = await puppeteer.launch({ headless: true })
  const page = await browser.newPage()
  await page.goto(
    'https://www.stepstone.de/5/ergebnisliste.html?ke=entwickler%20frontend%20backend%20fullstack&li=50&ob=refdate&suid=b7f1e477-21ae-4695-8f2f-2746a2a6a718&an=sorting'
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
    stepstone.slice(0, 1),
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
