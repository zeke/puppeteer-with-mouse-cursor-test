import puppeteer from 'puppeteer'
import { createCursor, installMouseHelper } from 'ghost-cursor'
const url = 'https://github.com/nodejs/node/discussions'

async function main () {
  const browser = await puppeteer.launch({ headless: false, defaultViewport: null })
  const pages = await browser.pages()
  const page = pages[0]
  await installMouseHelper(page)
  await page.goto(url)
  const selector = 'a[href="/nodejs/node/discussions/36430"]'
  await page.waitForSelector(selector)
  const cursor = createCursor(page)
  await cursor.move(selector)
  await cursor.click()
  setTimeout(async () => { await browser.close() }, 5000)
}

main()