import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Recording...
  await page.goto('https://test.jobtrain.co.uk/ybscareers/Application/AboutYou?Jobid=20323&section=1&Stage=0&edit=1&QuestionId=0');
  await page.getByRole('button', { name: 'add_circle' }).nth(1).click();
  await page.getByRole('textbox', { name: 'Academic Institute Attended' }).click();
  await page.getByRole('textbox', { name: 'Academic Institute Attended' }).fill('punjab university');
  await page.getByRole('textbox', { name: 'Date qualification achieved' }).click();
  await page.getByRole('textbox', { name: 'Date qualification achieved' }).fill('2026');
  await page.getByRole('textbox', { name: 'Course Studied' }).click();
  await page.getByRole('textbox', { name: 'Course Studied' }).fill('IT');
  await page.getByRole('button', { name: 'Save', exact: true }).click();
});