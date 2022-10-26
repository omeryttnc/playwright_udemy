import { test, expect } from "@playwright/test";
import { allure } from "allure-playwright";

test("basic test", async ({ page }, testInfo) => {
  allure.link({ url: "https://playwright.dev", name: "playwright-site" });
  allure.issue({
    url: "https://github.com/allure-framework/allure-js/issues/352",
    name: "Target issue",
  });
});