import { test , expect } from '@playwright/test';

// which is used to group the test
test.describe( "description" ,() => {
    test("Open HomePage and verify title", async ({ page }) => {
        // open url
        await page.goto("https://practice.sdetunicorns.com/");

        // verify title
        await expect(page).toHaveTitle("Practice E-Commerce Site SDET Unicorns")
    })
})