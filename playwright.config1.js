// @ts-check
const { devices } = require('@playwright/test');

const config = {
  testDir: './tests',
  /* Maximum time one test can run for. */
  timeout: 30 * 1000,
  expect: {

    timeout: 5000
  },

  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */

  projects: [
    {
      name: "chromium",
      use: {
        browserName: 'chromium',
        headless: false,
        screenshot: 'only-on-failure',
        trace: 'retain-on-failure'

      },
    },
    {
      name: "mobile",
      use: {
        browserName: 'chromium',
        headless: false,
        screenshot: 'only-on-failure',
        trace: 'retain-on-failure',
        viewport: { width: 720, height: 720 }

      },
    },
    {
      name: "iPhone",
      use: {
        browserName: 'chromium',
        headless: false,
        screenshot: 'only-on-failure',
        trace: 'retain-on-failure',
        ...devices['iPhone 11'],
      },
    },
    {
      name: "safari",
      use: {
        browserName: 'webkit',
        headless: false,
        screenshot: 'only-on-failure',
        trace: 'retain-on-failure'

      },

    }
  ]

};

module.exports = config;
// --config playwright.config1.js
// --config playwright.config1.js --project=safari   hic isim vermez isek butun browser larda calisir
