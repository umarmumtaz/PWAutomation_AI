import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://test.jobtrain.co.uk/ybscareers/Home/Job');
  await page.getByRole('button', { name: 'person_outline Hi paul' }).click();
  await page.getByRole('button', { name: 'person_outline Hi paul' }).click();
  await page.getByRole('link', { name: 'work My Applications' }).click();
  await page.getByRole('button', { name: 'Close' }).click();
  await page.getByTestId('btn-edit-20323').click();
  await page.getByRole('link', { name: 'Finish application' }).click();
  await page.getByTestId('select-txtTITLE').selectOption('Miss');
});