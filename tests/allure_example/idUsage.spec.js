import { test, expect } from "@playwright/test";
import { allure, LabelName } from "allure-playwright";

test("basic test", async ({ page }, testInfo) => {
    allure.id("Some id");
});