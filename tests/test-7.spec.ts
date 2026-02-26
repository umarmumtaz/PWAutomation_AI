import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Recording...
  await page.goto('https://test.jobtrain.co.uk/ybscareers/Application/AboutYou?Jobid=20323&section=1&Stage=0&edit=1&QuestionId=0');
  await page.getByRole('button', { name: 'delete' }).nth(3).click();
  await page.getByRole('button', { name: 'Delete', exact: true }).click();
  await page.getByRole('button', { name: 'add_circle' }).nth(2).click();
  await page.getByRole('textbox', { name: 'Do you have or are studying' }).click();
  await page.getByRole('textbox', { name: 'Do you have or are studying' }).fill('terst details');
  await page.getByRole('button', { name: 'Save', exact: true }).click();
});