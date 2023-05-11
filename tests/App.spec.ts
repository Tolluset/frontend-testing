import { test, expect } from "@playwright/test";

test.describe("App", () => {
  test("show", async ({ page }) => {
    await page.goto("http://localhost:5173");
    await expect(page).toHaveScreenshot();
  });
});