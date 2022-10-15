const { test, expect } = require('@playwright/test');

// npm test
// npx playwright test


test.only('Browser context playwrigt test', async ({ browser }) => {
let text;
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const documetink = page.locator("[href*='documents-request']");


    const [newPage] = await Promise.all([  // birden fazla pencere acilmis olsa idi newPage1,newPage2 seklinde arrayin icine yazardik

        context.waitForEvent('page'),
        documetink.click(),
    ]);

    text = await newPage.locator(".red").textContent();
    console.log(text);

    const arrayText = text.split("@");
    const domain = arrayText[1].split(" ")[0];

    console.log(domain);
    await page.locator("#username").type(domain);
    await page.pause();


});



