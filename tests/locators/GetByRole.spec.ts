import { test, expect } from '@playwright/test';

test('Get By Role practicer - heading', async ({ page }) => {
  await page.goto('');

  const servicesHeading = await page.getByRole('heading', {
    name: 'our services'
  })

  await expect(servicesHeading).toBeVisible();

})

test('Get by Role - list', async ({ page }) => {
    await page.goto('');

    const servicesList = await page.getByRole('list')
    await expect(servicesList).toBeVisible();

    const serviceItems = await servicesList.getByRole('listitem').all()

    for (const item of serviceItems) {
        const itemText = await item.textContent()
        expect(itemText).toBeTruthy()
    }
})

test('Get by Role - Buttons', async ({ page }) => {

  await page.goto('');
  const acceptCookiesButton = await page.getByRole('button', {
    name:'Accept',
    exact: true
  })

  const declineCookiesButton = await page.getByRole('button', {
    name:'Decline',
  })

  await acceptCookiesButton.click()

  await expect(acceptCookiesButton).not.toBeVisible()
  await expect(declineCookiesButton).not.toBeVisible()
})

test('Get by Role - Link', async ({ page }) => {
    await page.goto('');
    await page.getByRole('button', { name: 'Decline' }).click();
    await page.getByRole('link', { 
      name: 'Go to Feedback Form' 
    }).click()

    const url = page.url()
    expect(url).toContain('FeedBack')

    // const titlePge = await page.getByRole('heading', {
    //     name: 'Feedback Form'
    // })

    // await expect(titlePge).toBeVisible();
      
})