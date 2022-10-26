const { test, expect } = require('@playwright/test');

test('first', async ({ page }) => {


    await page.goto("https://www.rahulshettyacademy.com/AutomationPractice/");

    // await page.goBack();
    // await page.goForward();

    await expect(page.locator("#displayed-text")).toBeVisible();
    await page.locator("#hide-textbox").click();
    await expect(page.locator("#displayed-text")).toBeHidden();

    page.on('dialog', dialog => dialog.accept());   // oldugu yer inemli degil biyle bir event oldugunda yapacagi action i belirlemis oluyoruz
    // page.on('dialog',dialog => dialog.dismiss());
    page.on('dialog', dialog => console.log(dialog.message()));

    await page.locator("#confirmbtn").click();

    await page.locator("#mousehover").hover();

    //iframe


    const framePage = page.frameLocator("#courses-iframe");
    await framePage.locator("li a[href*='lifetime-access']:visible").click();   // sadece gozukene tiklamasi icin visible kondu
    const textCheck = await framePage.locator(".text h2").textContent();
    console.log(textCheck.split(" ")[1]);





})