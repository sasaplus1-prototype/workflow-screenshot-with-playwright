import { expect, test } from "@playwright/test";

test("should take a full page screenshot of the page", async ({ page }) => {
  await page.goto("https://example.com");
  await expect(page).toHaveScreenshot({
    fullPage: true,
  });
});
