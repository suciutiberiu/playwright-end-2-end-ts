import { test, expect } from "@playwright/test";

test('Intro heading has correct text', async({ page}) => {
    await page.goto('https://playwright.dev/');

    await page.getByRole('link', { name: 'Docs' }).click();
    const header =  page.getByRole('heading', { name: 'IntroductionDirect link to' });
    const title = await page.title();

    console.log('Page title is: ' + title);


    await expect(header).toHaveText('Introduction ');

})