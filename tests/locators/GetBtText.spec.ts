import {test , expect} from '@playwright/test';

test('Get By Text - Practicer', async ({ page }) => {
    await page.goto('FeedBackForm.html');

    const title = await page.getByText('Feedback Form').first()
    await expect(title).toBeVisible();
})

test('Get By Text - Practicer - error message', async ({ page }) => {
    await page.goto('FeedBackForm.html');
    
    const emailValidationMessage = await page.getByText('Invalid email format');
    await expect(emailValidationMessage).toBeHidden();
    
    await page.getByRole('textbox', { 
        name: 'Email' 
    }).fill('tiberiu@email');
    await expect(emailValidationMessage).toBeVisible();

    await page.getByRole('textbox', { 
        name: 'Email' 
    }).fill('tiberiu@email.com');
    await expect(emailValidationMessage).toBeHidden();
})

test('Get By Text - Practicer - hidden element', async ({ page }) => {
    await page.goto('FeedBackForm.html');

    const hiddenButton = await page.getByText('Hidden feature');
    await expect(hiddenButton).toBeHidden();

    const hiddenButtonText = await hiddenButton.textContent();
    console.log('Hidden button text is: ' + hiddenButtonText);

    const hiddenButtonWithRole = await page.getByRole('button', {
        name: 'Hidden feature'
    })

    // const hiddenButtonWithRoleText = await hiddenButtonWithRole.textContent();
})