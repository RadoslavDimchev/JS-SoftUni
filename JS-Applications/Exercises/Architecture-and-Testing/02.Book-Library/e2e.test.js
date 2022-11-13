const { chromium } = require('playwright-chromium');
const { expect } = require('chai');


let browser, page;
const host = 'http://127.0.0.1:5500/02.Book-Library/';

describe('E2E tests', async function () {
  this.timeout(5000);

  before(async () => { browser = await chromium.launch({ headless: false, slowMo: 500 }); });
  after(async () => { await browser.close(); });
  beforeEach(async () => { page = await browser.newPage(); });
  afterEach(async () => { await page.close(); });

  it('load books', async () => {
    await page.goto(host);

    await page.click('text=Load all books');
    await page.waitForSelector('tr');

    const rowData = await page.$$eval('tbody tr', rows => rows.map(r => r.textContent));

    expect(rowData[0]).to.contains('Harry Potter');
    expect(rowData[0]).to.contains('J.K.Rowling');
    expect(rowData[1]).to.contains('C# Fundamentals');
    expect(rowData[1]).to.contains('Svetlin Nakov');
  });

  it('add book', async () => {
    await page.goto(host);

    await page.fill('input[name=title]', 'Title');
    await page.fill('input[name=author]', 'Author');

    const [request] = await Promise.all([
      page.waitForRequest(request => request.method() === 'POST'),
      page.click('text=Submit')
    ]);
    const data = JSON.parse(request.postData());

    expect(data.title).to.equal('Title');
  });

  it('edit book', async () => {
    await page.goto(host);

    await page.click('text=Load all books');

    await page.locator('table tbody tr:nth-child(1) td:nth-child(3) .editBtn').click();

    await page.fill('text=Edit FORM TITLE AUTHOR Save >> [placeholder="Title..."]', 'Changed');

    await page.click('text=Save');

    await page.click('text=Load all books');

    const title = await page.textContent('tbody tr td');
    expect(title).to.equal('Changed');
  });

  it('delete book', async () => {
    await page.goto(host);

    await page.click('text=Load all books');

    await page.on('dialog', dialog => dialog.accept());
    await page.click('text=Delete');

    await page.click('text=Load all books');

    await page.waitForSelector('tr');

    const rowData = await page.$$eval('tbody tr', rows => rows.length);
    expect(rowData).to.equal(2);
  });
});