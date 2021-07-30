import puppeteer from 'puppeteer'
import { createCursor } from 'ghost-cursor'
const installMouseHelper = require('ghost-cursor/lib/mouse-helper')
const url = 'https://github.com/nodejs/node/discussions'

async function main () {
  const browser = await puppeteer.launch({ headless: false, defaultViewport: null })
  const pages = await browser.pages()
  const page = pages[0]
  await page.goto(url)
  const selector = 'a[href="/nodejs/node/discussions/36430"]'
  await page.waitForSelector(selector)
  const cursor = createCursor(page)
  await installMouseHelper(page)
  // await cursor.click(selector)
  await cursor.move(selector)
  await cursor.click()
  setTimeout(async () => {
    await browser.close()
  }, 3000)
}

main()

