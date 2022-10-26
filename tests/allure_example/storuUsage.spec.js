import { test, expect } from "@playwright/test";
import { allure } from "allure-playwright";

test("basic test", async ({ page }, testInfo) => {
  allure.story("Some Story");
});