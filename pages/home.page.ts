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
}

export default HomePage;