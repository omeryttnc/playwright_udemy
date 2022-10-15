const { test, expect } = require('@playwright/test');

// npm test
// npx playwright test


test.only('Browser context playwrigt test', async ({ page }) => {

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
    const titles = await page.locator(".card-body b").allTextContents();
    console.log(titles);
});



