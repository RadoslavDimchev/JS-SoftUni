const { chromium } = require('playwright-chromium');
const { expect } = require('chai');


let browser, page;
const host = 'http://127.0.0.1:5500/01.Messenger/';

describe('E2E tests', async function () {
  this.timeout(5000);

  before(async () => { browser = await chromium.launch({ headless: false, slowMo: 500 }); });
  after(async () => { await browser.close(); });
  beforeEach(async () => { page = await browser.newPage(); });
  afterEach(async () => { await page.close(); });

  it('load messages', async () => {
    await page.goto(host);
    await page.click('text=Refresh');
    const value = await page.inputValue('#messages');
    expect(value).to.contain('Spami: Hello, are you there?');
  });

  it('send message', async () => {
    await page.goto(host);

    await page.fill('#author', 'Rado');
    await page.fill('#content', 'Hello');

    await page.click('#submit');
    await page.click('#refresh');

    const value = await page.inputValue('#messages');
    expect(value).to.contain('Rado: Hello');
  });
});