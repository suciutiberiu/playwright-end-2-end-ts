import {test, expect} from '@playwright/test';

test('Css loactors', async ({ page }) => {
    await page.goto('');

    const welcomeMessage = page.locator('header').locator('h1');
    const welcomeMessageText = await welcomeMessage.textContent();
    expect(welcomeMessageText).toContain('Welcome');

    const welcomeMessage2 = page.locator('header > h1');
    const welcomeMessage2Text = await welcomeMessage2.textContent();
    expect(welcomeMessage2Text).toContain('Welcome');

    // select by css id:
    const cookieBanner = page.locator('#cookie-banner');
    await expect(cookieBanner).toBeVisible();

    // select by css class:
    const acceptCookiesButton = page.locator('.accept');
    await acceptCookiesButton.click();
    await expect(cookieBanner).not.toBeVisible();

});