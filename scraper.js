const fs = require('fs')
const path = require('path')
const puppeteer = require('puppeteer')
const async = require('async')
;(async () => {
  const browser = await puppeteer.launch({ headless: true })
  const page = await browser.newPage()
  await page.goto(
    'https://www.stepstone.de/5/ergebnisliste.html?ke=homeoffice%2C%20home%20office%2C%20Home%20Office%2C%20Home-Office&re=353%2C50000%2C50001%2C50002%2C50003%2C50004%2C50005%2C50006%2C50007%2C50008%2C50009%2C50011%2C50021%2C50012%2C50013%2C50014%2C50015%2C50016%2C50017%2C50018%2C50019%2C50020%2C50022%2C50032%2C50023%2C50024%2C50025%2C50026%2C50027%2C50028%2C50029%2C50030%2C50031%2C50033%2C50043%2C50034%2C50035%2C50036%2C50037%2C50038%2C50039%2C50040%2C50041%2C50042%2C50044%2C50054%2C50045%2C50046%2C50047%2C50048%2C50049%2C50050%2C50051%2C50052%2C50053%2C50055%2C50065%2C50056%2C50057%2C50058%2C50059%2C50060%2C50061%2C50062%2C50063%2C50064%2C50066%2C50076%2C50067%2C50068%2C50069%2C50070%2C50071%2C50072%2C50073%2C50074%2C50075%2C50077%2C50087%2C50078%2C50079%2C50080%2C50081%2C50082%2C50083%2C50084%2C50085%2C50086%2C50088%2C50098%2C50089%2C50090%2C50091%2C50092%2C50093%2C50094%2C50095%2C50096%2C50097%2C50099%2C50109%2C50100%2C50101%2C50102%2C50103%2C50104%2C50105%2C50106%2C50107%2C50108&fu=1022000%2C1023000&se=21000&ob=refdate&li=100&of=0&suid=e5c7017b-e1cc-4e36-8f6a-1aa921e618f1&an=resultPerPageChanged'
  )

  const stepstone = await page.evaluate(scrapeFirstPage)

  function scrapeFirstPage() {
    return Array.from(document.querySelectorAll('.job-element')).map(card => {
      const href = card
        .querySelector('.job-element__body > a')
        .getAttribute('href')
      const id = card.querySelector('time').getAttribute('datetime')
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

      const result = {
        id,
        position,
        company,
        image,
        date,
        href,
        key: href
      }

      console.log('result', result)
      return result
    })
  }

  function goThroughCards() {
    const cards = Array.from(document.querySelectorAll('.card__body'))
    return (
      cards
        .map(card => {
          const title = card.querySelector('.card__title')
          const body = card.querySelector('.richtext')
          return title && body
            ? {
                title: title ? title.textContent : '',
                body: body ? body.textContent : ''
              }
            : { title: '', body: '' }
        })
        .filter(cardData => cardData.title && cardData.body) || []
    )
  }

  const newStepstone = async.mapSeries(
    stepstone.slice(8, 12),
    async stone => {
      try {
        await page.goto(stone.href)
      } catch (error) {}
      let details
      try {
        details = await page.evaluate(goThroughCards)
      } catch (error) {
        return stone
      }
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
