//@ts-check
const { chromium } = require('playwright-chromium');
const { expect } = require('chai');


let browser;
let context;
let page;

const host = 'http://localhost:5500/';
const userData = {
    email: 'rado@gmail.com',
    password: '123456',
    id: '0001'
};
const recipe = {
    name: 'musaka',
    img: 'no',
    ingredients: ['potatoes', 'meat'],
    steps: ['put in oven for 30 minutes']
};

describe('E2E tests', async function () {
    this.timeout(6000);

    before(async () => {
        // browser = await chromium.launch({ headless: false, slowMo: 500 });
        browser = await chromium.launch();
    });

    after(async () => {
        await browser.close();
    });

    beforeEach(async () => {
        context = await browser.newContext();

        // block intensive resources and external calls (page routes take precedence)
        await context.route('**/*.{png,jpg,jpeg}', route => route.abort());
        await context.route(url => {
            return url.hostname != 'localhost';
        }, route => route.abort());

        page = await context.newPage();
    });

    afterEach(async () => {
        await page.close();
        await context.close();
    });


    describe('Catalog', async () => {
        it('display content of the API', async () => {
            await page.goto(host);

            await page.waitForSelector('.preview');

            let visible = await page.isVisible('.preview');

            expect(visible).to.be.true;
        });

        it('displays the recipe details', async () => {
            await page.goto(host);

            await page.waitForSelector('.preview');

            await page.click('.preview');
            await page.waitForSelector('#details');

            let visible = await page.isVisible('#details');

            expect(visible).to.be.true;
        });
    });

    describe('Authentication', async () => {
        it('register makes correct API call', async () => {
            await page.goto(host);

            await page.waitForSelector('nav');
            await page.click('text=register');

            await page.waitForSelector('#register');
            await page.fill('[name="email"]', userData.email);
            await page.fill('[name="password"]', userData.password);
            await page.fill('[name="rePass"]', userData.password);

            const [response] = await Promise.all([
                page.waitForResponse('**/register'),
                page.click('[type="submit"]')
            ]);
            const data = JSON.parse(response.request().postData());

            expect(data.email).to.equal(userData.email);
            expect(data.password).to.equal(userData.password);
        });

        it('login makes correct API call', async () => {
            await page.goto(host);

            await page.waitForSelector('nav');
            await page.click('text=login');
            await page.waitForSelector('#login');

            await page.fill('[name="email"]', userData.email);
            await page.fill('[name="password"]', userData.password);

            const [response] = await Promise.all([
                page.waitForResponse('**/login'),
                page.click('[type="submit"]')
            ]);
            const data = JSON.parse(response.request().postData());

            expect(data.email).to.equal(userData.email);
            expect(data.password).to.equal(userData.password);
        });
    });

    describe('CRUD operations', async () => {
        beforeEach(async () => {
            await page.goto(host);

            await page.waitForSelector('nav');
            await page.click('text=login');
            await page.waitForSelector('#login');

            await page.fill('[name="email"]', userData.email);
            await page.fill('[name="password"]', userData.password);

            await Promise.all([
                page.waitForResponse('**/login'),
                page.click('[type="submit"]')
            ]);
        });

        async function createRecipe() {
            await page.waitForSelector('nav');
            await page.click('text=Create Recipe');

            await page.waitForSelector('#create');
            await page.fill('[name="name"]', recipe.name);
            await page.fill('[name="img"]', recipe.img);
            await page.fill('[name="ingredients"]', recipe.ingredients.join('\n'));
            await page.fill('[name="steps"]', recipe.steps.join('\n'));

            const [response] = await Promise.all([
                page.waitForResponse('**/data/recipes'),
                page.click('[type="submit"]')
            ]);
            return JSON.parse(response.request().postData());
        }

        it('"create" makes correct API call for logged in user', async () => {
            const data = await createRecipe();

            expect(data.name).to.equal(recipe.name);
            expect(data.img).to.equal(recipe.img);
            expect(data.ingredients).to.deep.equal(recipe.ingredients);
            expect(data.steps).to.deep.equal(recipe.steps);
        });

        it('The author can see the "Edit" and "Delete" button', async () => {
            await createRecipe();

            await page.waitForSelector('#details');

            const visible = await page.isVisible('.controls');
            expect(visible).to.be.true;
        });

        it('"edit" loads the correct article data for logged in user', async () => {
            await createRecipe();

            await page.waitForSelector('.controls');
            await page.click('.controls button:nth-child(1)');
            await page.waitForSelector('form');

            const name = await page.inputValue('[name="name"]');
            const img = await page.inputValue('[name="img"]');
            const ingredients = await page.inputValue('[name="ingredients"]');
            const steps = await page.inputValue('[name="steps"]');

            expect(name).to.equal(recipe.name);
            expect(img).to.equal(recipe.img);
            expect(ingredients).to.equal(recipe.ingredients.join('\n'));
            expect(steps).to.equal(recipe.steps.join('\n'));
        });

        it('edit makes correct API call for logged in user', async () => {
            await createRecipe();

            await page.waitForSelector('.controls');
            await page.click('.controls button:nth-child(1)');
            await page.waitForSelector('form');

            await page.fill('[name="name"]', 'musaka 2');

            await page.click('[type="submit"]');

            await page.waitForSelector('#details');
            const constent = await page.textContent('h2');
            expect(constent).to.equal('musaka 2');
        });
    });
});