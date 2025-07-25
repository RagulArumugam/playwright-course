import { test , expect } from '@playwright/test';
import HomePage from '../pages/home.page';
// which is used to group the test
test.describe( "description" ,() => {
    let homePage: HomePage;
    test("Open HomePage and verify title", async ({ page }) => {
        homePage = new HomePage(page);
        // open url
        await homePage.page.goto("https://practice.sdetunicorns.com/");

        // verify title
        await expect(homePage.page).toHaveTitle("Practice E-Commerce Site – SDET Unicorns")
    })

    test("Open About Page and verify title", async ({ page }) => {
        // open url
        homePage = new HomePage(page);

        await homePage.page.goto("https://practice.sdetunicorns.com/about");

        // verify title
        await expect(homePage.page).toHaveTitle("About – Practice E-Commerce Site")
    })

    test("Click get started button using CSS selector", async ({ page }) => {
        // open url
        homePage = new HomePage(page);
        await homePage.page.goto("https://practice.sdetunicorns.com/");

        // click the button
        await homePage.getStartedButton.click();

        // verify url has #get-started
        await expect(homePage.page).toHaveURL("https://practice.sdetunicorns.com/#get-started")
    })

    test("get the title using using Text selector", async ({ page }) => {
        homePage = new HomePage(page);
        // open url
        await homePage.page.goto("https://practice.sdetunicorns.com/");

        // click the button
        let titleText = homePage.headerText;

        // verify url has #get-started
        await expect(titleText).toBeVisible();
    })

    test("Verify home link is enabled using text and css selector", async ({ page }) => {
        homePage = new HomePage(page);

        // open url
        await homePage.page.goto("https://practice.sdetunicorns.com/");

        // click the button
        // let titleText = await page.locator("#zak-primary-menu >> text=Home");
        let titleText = await homePage.homeLink;

        // verify url has #get-started
        await expect(titleText).toBeEnabled();
    })

    test("Verify home link is enabled using text and css selectors", async ({ page }) => {
        homePage = new HomePage(page);

        // open url
        await homePage.page.goto("https://practice.sdetunicorns.com/");

        // click the button
        // let titleText = await page.locator("#zak-primary-menu >> text=Home");
        let titleText = await homePage.homeLink;

        // verify url has #get-started
        await expect(titleText).toBeEnabled();
    })


})