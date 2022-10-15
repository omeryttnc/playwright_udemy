const { test, expect } = require('@playwright/test');

// npm test
// npx playwright test


test('Browser context playwrigt test', async ({ page }) => {

    const documetink = page.locator("[href*='documents-request']");
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");


    const dropDown = page.locator("select.form-control");

    await dropDown.selectOption("consult");
    await page.locator(".radiotextsty").last().click();

    await page.locator("#okayBtn").click();

    await expect(page.locator(".radiotextsty").last()).toBeChecked();
    console.log(await page.locator(".radiotextsty").last().isChecked());


    await page.locator("#terms").check(); //.click();
    await expect(page.locator("#terms")).toBeChecked();

    await page.locator("#terms").uncheck();

    expect(await page.locator("#terms").isChecked()).toBeFalsy();

    await expect(documetink).toHaveAttribute("class", "blinkingText");

    // await page.pause();

});



