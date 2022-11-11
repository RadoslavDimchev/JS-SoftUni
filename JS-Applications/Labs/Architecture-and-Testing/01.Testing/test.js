const { chromium } = require('playwright-chromium');
const { expect } = require('chai');


let browser, page;

describe('E2E tests', async function () {
  this.timeout(5000);

  before(async () => { browser = await chromium.launch(); });
  after(async () => { await browser.close(); });
  beforeEach(async () => { page = await browser.newPage(); });
  afterEach(async () => { await page.close(); });

  it('load titles', async () => {
    await page.goto('http://127.0.0.1:5500/01.Accordion/index.html');

    await page.waitForSelector('.accordion');

    const content = await page.textContent('#main');

    expect(content).to.include('Scalable Vector Graphics');
    expect(content).to.include('Open standard');
    expect(content).to.include('Unix');
    expect(content).to.include('ALGOL');
  });

  it('button More functionality', async () => {
    await page.goto('http://127.0.0.1:5500/01.Accordion/index.html');

    await page.click('text=More');
    await page.waitForSelector('.accordion p');
    const visible = await page.isVisible('.accordion p');

    expect(visible).to.be.true;
  });

  it('button Less functionality', async () => {
    await page.goto('http://127.0.0.1:5500/01.Accordion/index.html');

    await page.click('text=More');
    await page.waitForSelector('.accordion p');
    let visible = await page.isVisible('.accordion p');
    expect(visible).to.be.true;

    await page.click('text=Less');
    visible = await page.isVisible('.accordion p');
    expect(visible).to.be.false;
  });
});