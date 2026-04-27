import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://test.jobtrain.co.uk/voyagecare/Client/Login1');
  await page.getByTestId('txt-email').click();
  await page.getByTestId('txt-email').fill('nanncy');
  await page.getByTestId('txt-email').press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('Testing@123');
  await page.getByRole('textbox', { name: 'Password' }).press('Enter');
  await page.getByTestId('btn-login').click();
  await page.getByTestId('btn-home-jobs').click();




  await page.getByTestId('div-tbl-row-data-cell-0-CREATEDBYName').getByText('Voyage Care').click();
  await page.goto('https://test.jobtrain.co.uk/voyagecare/Client/JobsAndTalents/CandidateList/List?id=535');
  await page.getByTestId('div-tbl-data-row-0').getByRole('link', { name: 'PW Paul Walker' }).click();
});