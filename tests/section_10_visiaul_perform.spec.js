const { test, expect } = require('@playwright/test');

test('screen shoot', async ({ page }) => {
    await page.goto("https://www.rahulshettyacademy.com/AutomationPractice/");

    // await page.goBack();
    // await page.goForward();

    await expect(page.locator("#displayed-text")).toBeVisible();
    await page.locator("#displayed-text").screenshot({ path: 'screen_locator.png' });
    await page.locator("#hide-textbox").click();
    await page.screenshot({ path: "screenshot.png" })
    await expect(page.locator("#displayed-text")).toBeHidden();
});


test('visual', async ({ page }) => {

await page.goto('https://www.google.co.uk/');
expect(await page.screenshot()).toMatchSnapshot('landing.png');


})