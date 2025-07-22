import { test , expect } from '@playwright/test';
import path from 'path';

// which is used to group the test
test.describe( "test uploading a file" ,() => {
    test("Open cart page and check for file upload", async ({ page }) => {
        // open url
        await page.goto("https://practice.sdetunicorns.com/cart/");

        // store the test file path
        const filePath = path.join(__dirname, '../data/logotitle.png'); // replace with your actual file path
        
        // upload the file
        await page.setInputFiles('input#upfile_1', filePath);

        // click the upload button
        await page.locator('#upload_1').click();

        //assertion
        // await expect(page.locator('#wfu_messageblock_header_1_1')).toContainText('uploaded successfully');
    }) 

    test("Open cart page and check for file upload with Dom manipulation", async ({ page }) => {
        // open url
        await page.goto("https://practice.sdetunicorns.com/cart/");

        // store the test file path
        const filePath = path.join(__dirname, '../data/logotitle.png'); // replace with your actual file path
        
        // manipulate the DOM to set the file input
        await page.evaluate((filePath) => {
            const selector = document.querySelector('input#upfile_1');
            if (selector) {
                selector.className = "";
            }
        });

        // upload the file
        await page.setInputFiles('input#upfile_1', filePath);

        // click the upload button
        await page.locator('#upload_1').click();

        //assertion
        // await expect(page.locator('#wfu_messageblock_header_1_1')).toContainText('uploaded successfully');
    }) 
})