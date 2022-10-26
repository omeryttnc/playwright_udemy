const { test, expect } = require('@playwright/test');

let webContext;
test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const username = "omeryttnc2@gmail.com"
    const password = "bbMdTHsd6wEg6xc";

    await page.goto("https://rahulshettyacademy.com/client");

    await page.fill("#userEmail", username);
    await page.fill("#userPassword", password);

    // race condition                                       server base
    await Promise.all(
        [

            page.waitForNavigation(),
            page.click("[value='Login']"),
        ]
    );

    // wait solution way 2 network dolana kadar bekliyor   service base
    await page.waitForLoadState('networkidle');

    await context.storageState({ path: 'state.json' });

    webContext = await browser.newContext({
        storageState: 'state.json'
    })
})



test('Browser context playwrigt test', async () => {

    const page = await webContext.newPage();
    await page.goto("https://rahulshettyacademy.com/client");
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(5);   
     const titles = await page.locator(".card-body b").allTextContents();
    console.log(titles);
});
