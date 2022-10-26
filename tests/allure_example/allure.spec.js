import { test, expect } from "@playwright/test";
import { allure } from "allure-playwright";


test("basic test 1", async ({ page }, testInfo) => {
    allure.epic("Epic 1");
});


test("basic test 2", async ({ page }, testInfo) => {
    allure.id("id 1");
});

test("basic test 3", async ({ page }, testInfo) => {
    allure.label({ name: LabelName.LANGUAGE, value: "typescript" });
});

test("basic test 4", async ({ page }, testInfo) => {
    allure.story("Story 1");
});

test("basic test 5", async ({ page }, testInfo) => {
    allure.link({ url: "https://playwright.dev", name: "playwright-site" });
    allure.issue({
        url: "https://github.com/allure-framework/allure-js/issues/352",
        name: "Target issue",
    });
});


test("together", async({page},testInfo)=>{
    allure.epic("Epic 3");
    allure.id("id 3");
    allure.story("Story 2");
    allure.severity("P1");

})