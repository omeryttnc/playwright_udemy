const { chromium } = require('@playwright/test');
const HomePage = require('../models/DemoQHome.page');
const BookPage = require('../models/DemoQBook.page');

describe('Applitools demo page', () => {
    jest.setTimeout(30000);
    let browser = null;
    let context = null;
    let page = null;
    let homePage = null;
    let bookPage = null;

    beforeAll(async () => {
        // we launch browser and navigate to the loginpage
        browser = await chromium.launch({ headless: false });
        context = await browser.newContext();
        page = await context.newPage();
        homePage = new HomePage(page);
        bookPage = new BookPage(page);
        await bookPage.navigate();
    });

    afterAll(async () => {
        // closing browser
        await context.close();
        await browser.close();
    });


    it('Should be able to login', async () => {

        expect(await page.title()).not.toBeNull();
        console.log(await page.title());
        
        expect(await page.title()).toBe('ToolsQA');
        
    })
    
    
    it('search book', async ()=>{
        await bookPage.searchBook('Git Pocket Guide');
        await page.screenshot({ path: 'book.png' });
    })

    it('assert book',async ()=>{

        await bookPage.assertionBook('Git Pocket Guide');
    })





});