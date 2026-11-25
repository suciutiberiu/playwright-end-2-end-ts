import {test} from '@playwright/test';

test('Get By Label practice - inside form', async ({ page }) => {
    await page.goto('FeedBackForm.html');

    const name = page.getByLabel('name');

    await name.fill('Tiberiu');

    const email = page.getByLabel('email');

    await email.fill('tiberiu@example.com');

    await page.pause();
})