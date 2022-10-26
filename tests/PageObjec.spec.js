const { test, expect } = require('@playwright/test');
const { AllPages } = require('../pageobjects/AllPages');
const dataset = JSON.parse(JSON.stringify(require("../utils/placeOrderTestData.json")));
// npm test
// npx playwright test


for (const data of dataset) {

    test(`Browser context playwrigt test ${data.username}`, async ({ page }) => {
        // const username = "omeryttnc2@gmail.com"
        // const password = "bbMdTHsd6wEg6xc";
        const allPges = new AllPages(page);
        const loginPage = allPges.getLoginPage();
        // allPges.getLoginPage.goTo();
        await loginPage.goTo();
        await loginPage.validLogin(data.username, data.password);

    });
}

test('Browser context playwrigt test ', async ({ page }) => {
    // const username = "omeryttnc2@gmail.com"
    // const password = "bbMdTHsd6wEg6xc";
    const allPges =new AllPages(page);
    // await allPges.getLoginPage.goTo();
     await allPges.loginPage.goTo();
    // await allPges.getLoginPage.validLogin(dataset[0].username, dataset[0].password)
    await allPges.loginPage.validLogin(dataset[0].username, dataset[0].password);

});