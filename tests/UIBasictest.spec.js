const { test, expect } = require('@playwright/test');

// npm test
// npx playwright test


test.only('Browser context playwrigt test', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();

    const userName = page.locator('#username');
    const password = page.locator("[type='password']");
    const signIn = page.locator("#signInBtn");
    const cardTitles = page.locator(".card-body a");

    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    console.log(await page.title());

    await page.locator('#username').type("rahulshetty");
    await page.locator("[type='password']").type("learning");
    await page.locator("#signInBtn").click();

    console.log(await page.locator("[style*='block']").textContent());

    await expect(page.locator("[style*='block']")).toContainText('Incorrect');


    // type-fill

    await userName.fill("");
    await userName.fill("rahulshettyacademy");

    await signIn.click();

    console.log(await page.locator(".card-body a").first().textContent());
    console.log(await page.locator(".card-body a").nth(1).textContent());
    console.log(await page.locator(".card-body a").first().innerHTML());

    const allTitles = await cardTitles.allInnerTexts();
    const allTitles2 = await cardTitles.allTextContents();
    console.log(allTitles);
    console.log(allTitles2);

});




test('page playwrigt test', async ({ page }) => {


    await page.goto('https://google.com');
    console.log(await page.title());

    expect(await page.title()).toBe('Google');
    await expect(page).toHaveTitle('Google');
});

