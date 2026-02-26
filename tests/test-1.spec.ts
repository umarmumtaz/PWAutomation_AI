import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Recording...
});
await page.getByRole('textbox', { name: 'Start Date' }).click();
await page.getByRole('columnheader', { name: 'February' }).click();
await page.getByRole('columnheader', { name: '2026' }).click();
await page.getByRole('columnheader', { name: '«' }).click();
await page.getByRole('columnheader', { name: '«' }).click();
await page.getByText('2000').nth(1).click();
await page.getByText('Feb', { exact: true }).click();
await page.getByRole('row', { name: 'Date 30 February 2000 Date 31' }).getByLabel('Date 2 February').click();