import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://test.jobtrain.co.uk/voyagecare/Home/Job');
  await page.locator('[data-test="a-sign-in"]').click();
  await page.getByTestId('txt-email').click();
  await page.getByTestId('txt-email').fill('nanncykevin@gmail.com');
  await page.getByTestId('txt-email').press('Tab');
  await page.getByTestId('txt-password').fill('Testing@123');
  await page.getByTestId('txt-password').press('Enter');
  await page.getByTestId('btn-Sign in, please enter your username and password').click();
  await page.getByTestId('btn-edit-535').click();
  await page.getByRole('link', { name: 'Finish application' }).click();
  await page.getByRole('button', { name: 'add_circle' }).first().click();
  await page.getByRole('textbox', { name: 'Graduation Start Year [e.g.' }).click();
  await page.getByRole('row', { name: 'Date 26 May 2026 Date 27 May 2026 Date 28 May 2026 Date 29 May 2026 Date 30 May 2026 Date 1 May 2026 Date 2 May 2026', exact: true }).getByLabel('Date 1 May').click();
  await page.getByRole('textbox', { name: 'Graduation Year [e.g. 1999]' }).click();
  await page.getByRole('button', { name: 'Date 19 May' }).click();



  await page.locator('#txtLEVELTYPE').selectOption('10');
  await page.getByRole('textbox', { name: 'Course/Degree Subject' }).click();
  await page.getByRole('textbox', { name: 'Course/Degree Subject' }).fill('PU');
  await page.getByRole('textbox', { name: 'Attempts' }).click();
  await page.getByRole('textbox', { name: 'Attempts' }).fill('1');
  await page.getByRole('textbox', { name: 'Level/Type of Degree *' }).click();
  await page.getByRole('textbox', { name: 'Level/Type of Degree *' }).fill('2005');
  await page.locator('#txtREAULT').selectOption('5');
  await page.getByRole('cell', { name: 'Level/Type of Degree * Answer' }).getByLabel('Level/Type of Degree *').selectOption('Obtained');
});