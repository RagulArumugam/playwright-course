import { test , expect } from '@playwright/test';

// which is used to group the test
test.describe( "description" ,() => {
    test("Open HomePage and verify title", async ({ page }) => {
        // open url
        await page.goto("https://practice.sdetunicorns.com/contact");

        //fillout my input fields
        await page.locator(".contact-name input").fill("Test Name");
        await page.locator(".contact-email input").fill("Test Name");
        await page.locator(".contact-phone input").fill("Test Name");
        await page.locator(".contact-message textarea").fill("Test Name");

        // click subbmit button
        await page.locator('button[type=submit]').click()
        await page.pause();
        const successAlert = page.locator('div[role="alert"]');
        // await expect(successAlert).toHaveText(/Thanks for contacting us! We will be in touch with you shortly/);
    }) 
})