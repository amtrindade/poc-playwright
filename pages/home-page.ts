import  { expect, type Locator, type Page } from "@playwright/test";

export class HomePage {
    //variables
    readonly page:Page;
    //await page.getByRole('link', { name: 'Get started' }).click();
    readonly getStartedButton: Locator;
    //await expect(page).toHaveTitle(/Playwright/);
    readonly title: RegExp;

    //constructor
    constructor (page: Page) {
        this.page = page;
        this.getStartedButton = page.getByRole('link', { name: 'Get started' });
        this.title = /Playwright/;
    }

    //methods
    async clickGetStartedButton(){
        await this.getStartedButton.click();
    }

    async assertPageTitle(){
        await expect(this.page).toHaveTitle(this.title);
    }

}

export default HomePage;