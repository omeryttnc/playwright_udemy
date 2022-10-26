// @ts-check
const { devices } = require('@playwright/test');

const config = {
  testDir: './tests',
  retries: 1,
  workers: 3,
  /* Maximum time one test can run for. */
  timeout: 30 * 1000,
  expect: {

    timeout: 5000
  },

  reporter: [
    ['html'],
    ['line'],
    ['allure-playwright', {
      detail: true,
      outputFolder: 'my-allure-results',
      suiteTitle: false
    }]

  ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    browserName: 'chromium',
    headless: false,
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
    video: 'retain-on-failure',
    ignoreHTTPSErrors: true, // ssl certificate error handle icin
    permissions: ['geolocation'] // locationa erisim iznini direk vermek icin 

  },


};

module.exports = config;
