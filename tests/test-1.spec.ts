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
await page.getByRole('button', { name: 'person_outline Hi Sidhant' }).click();
await page.getByRole('link', { name: 'work My Applications' }).click();
await page.getByTestId('btn-edit-535').click();
await page.getByRole('link', { name: 'Finish application' }).click();
await page.getByTestId('btn-ref-edit-1').click();
await page.getByText('I currently work here').click();
await page.getByRole('textbox', { name: 'Date From' }).click();
await page.getByRole('row', { name: 'Date 26 May 2026 Date 27 May 2026 Date 28 May 2026 Date 29 May 2026 Date 30 May 2026 Date 1 Mayawait page.getByText('Feb').click(); 2026 Date 2 May 2026', exact: true }).getByLabel('Date 1 May').click();

await page.getByRole('textbox', { name: 'Date From' }).click();
await page.getByRole('columnheader', { name: 'May' }).click();
await page.getByRole('columnheader', { name: '2026' }).click();
await page.getByRole('columnheader', { name: '«' }).click();
await page.getByText('2000').nth(1).click();
await page.getByText('Feb').click();
await page.getByText('Feb').click();