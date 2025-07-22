import { test , expect } from '@playwright/test';

// which is used to group the test
test.describe( "blog post testing" ,() => {
    test("Open blog post check recent posts", async ({ page }) => {
        // open url
        await page.goto("https://practice.sdetunicorns.com/blog");

        let allLinks = await page.locator("#recent-posts-3 >> li")

        expect(test.info().errors).toEqual([]);

        for (let el of await allLinks.elementHandles()) {
            expect(((await el.textContent())?.trim())?.length).toBeGreaterThanOrEqual(10);
        }
        expect((await allLinks.allTextContents()).length).toEqual(5);
    }) 
})