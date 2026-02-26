import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Recording...
  await page.goto('https://test.jobtrain.co.uk/ybscareers/Application/AboutYou?Jobid=20323&section=1&Stage=0&edit=1&QuestionId=0');
  await page.getByTestId('btn-ref-delete-1').click();
  await page.getByTestId('btn-delete-employment').click();
});