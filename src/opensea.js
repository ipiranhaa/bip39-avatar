import puppeteer from 'puppeteer'
import dappeteer from 'dappeteer'
import dotenv from 'dotenv'

dotenv.config

async function main() {
  const browser = await dappeteer.launch(puppeteer)
  const metamask = await dappeteer.getMetamask(browser)

  // create or import an account
  await metamask.importPK(process.env.PK)

  // go to a dapp and do something that prompts MetaMask to confirm a transaction
  const page = await browser.newPage()
  await page.goto('https://www.opensea.io')
  // const payButton = await page.$('#pay-with-eth')
  // await payButton.click()

  // // 🏌
  // await metamask.confirmTransaction()
}

;(async () => {
  const browser = await dappeteer.launch(puppeteer, {
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--start-maximized'],
  })
  // const metamask = await dappeteer.getMetamask(browser)
  // console.log('initial metamask')
  // await metamask.importPK(process.env.PK)

  console.log(await browser.version())
  const page = await browser.newPage()
  await page.setUserAgent(
    'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150  Safari/537.36'
  )
  await page.goto('https://opensea.io/asset/create')
  await page.screenshot({ path: 'opensea.png' })
  await browser.close()
})()
