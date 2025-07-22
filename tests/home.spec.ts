import { test , expect } from '@playwright/test';

// which is used to group the test
test.describe( "description" ,() => {
    test("Open HomePage and verify title", async ({ page }) => {
        // open url
        await page.goto("https://practice.sdetunicorns.com/");

        // verify title
        await expect(page).toHaveTitle("Practice E-Commerce Site – SDET Unicorns")
    })

    test("Open About Page and verify title", async ({ page }) => {
        // open url
        await page.goto("https://practice.sdetunicorns.com/about");

        // verify title
        await expect(page).toHaveTitle("About – Practice E-Commerce Site")
    })

    test("Click get started button using CSS selector", async ({ page }) => {
        // open url
        await page.goto("https://practice.sdetunicorns.com/");

        // click the button
        await page.locator("#get-started").click();

        // verify url has #get-started
        await expect(page).toHaveURL("https://practice.sdetunicorns.com/#get-started")
    })

    test("get the title using using Text selector", async ({ page }) => {
        // open url
        await page.goto("https://practice.sdetunicorns.com/");

        // click the button
        let titleText = page.locator("text=Think different. Make different.");

        // verify url has #get-started
        await expect(titleText).toBeVisible();
    })

    test("Verify home link is enabed usng text and css selector", async ({ page }) => {
        // open url
        await page.goto("https://practice.sdetunicorns.com/");

        // click the button
        // let titleText = await page.locator("#zak-primary-menu >> text=Home");
        let titleText = await page.locator("#zak-primary-menu:has-text('Home')");

        // verify url has #get-started
        await expect(titleText).toBeEnabled();
    })

    test("Verify home link is enabed usng text and css selectorssss", async ({ page }) => {
        // open url
        await page.goto("https://practice.sdetunicorns.com/");

        // click the button
        // let titleText = await page.locator("#zak-primary-menu >> text=Home");
        let titleText = await page.locator("#zak-primary-menu:has-text('Home')");

        // verify url has #get-started
        await expect(titleText).toBeEnabled();
    })


})