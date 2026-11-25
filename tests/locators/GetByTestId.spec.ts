import { test, expect } from '@playwright/test';

test('Get By TestId practice - accept cookies', async ({ page }) => {
    await page.goto('');

    const acceptCookiesButton = await page.getByTestId('accept-cookies');
    
    await acceptCookiesButton.click();
    await expect(acceptCookiesButton).not.toBeVisible();
})