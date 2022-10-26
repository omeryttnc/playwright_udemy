const { test, expect } = require('@playwright/test');

// npm test
// npx playwright test


test('@Web Browser context playwrigt test', async ({ page }) => {

    const username = "omeryttnc2@gmail.com"
    const password = "bbMdTHsd6wEg6xc";

    await page.goto("https://rahulshettyacademy.com/client");

    await page.fill("#userEmail", username);
    await page.fill("#userPassword", password);


    const products = page.locator(".card-body");

    page.click("[value='Login']");
    // await page.waitForTimeout(5);
    // await page.waitForLoadState('networkidle');
    await page.locator(".card-body b").first().waitFor();
    const titles = await page.locator(".card-body b").allTextContents();
    // console.log(titles);


    const productName = 'zara coat 3';
    const count = await products.count();
    // console.log(count);
    for (let index = 0; index < count; index++) {
        //console.log(await products.nth(index).locator("b").textContent());
        if (await products.nth(index).locator("b").textContent() === productName) {

            await products.nth(index).locator("text= Add To Cart").click();
            break;
        }
    }
    await page.locator("[routerlink*= 'cart']").click();
    await page.locator("div li").first().waitFor();


    const bool = await page.locator("h3:has-text('zara coat 3')").isVisible();


    expect(bool).toBeTruthy();

    const siparisCodu = page.locator("div.infoWrap").locator(".itemNumber").allTextContents();
    const addedProductName = page.locator("div.infoWrap").locator("h3").allTextContents();
    const droplist = page.locator("button[type='button']");

    console.log(await siparisCodu);
    console.log(await addedProductName);

    droplist.last().click();
    const drop = page.locator("[placeholder*='Country']");
    await drop.waitFor();

    await drop.type("ind", { delay: 100 });

    for (let index = 0; index < droplist.length; index++) {
        const text = droplist.locator("button").nth(index).textContent();
        console.log(await text);
        if (await droplist.locator("button").nth(index).textContent() === " India") {
            await droplist.locator("button").nth(index).click();
        }
    }

    //await page.pause();

});
