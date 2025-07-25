import { Page , Locator } from '@playwright/test';

class HomePage {
    page: Page;
    getStartedButton: Locator;
    headerText: Locator;
    homeLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.getStartedButton = page.locator("#get-started");
        this.headerText = page.locator("text=Think different. Make different.");
        this.homeLink = page.locator("#zak-primary-menu:has-text('Home')");
    }

    async navigateToHomePage() {
        await this.page.goto("https://practice.sdetunicorns.com/");
    }
}

export default HomePage;