import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://test.jobtrain.co.uk/ybscareers/Home/Job');
  await page.getByRole('button', { name: 'person_outline Hi paul' }).click();
  await page.getByRole('button', { name: 'person_outline Hi paul' }).click();
  await page.getByRole('link', { name: 'work My Applications' }).click();
  await page.getByRole('button', { name: 'Close' }).click();
  await page.getByTestId('btn-edit-20323').click();
  await page.getByRole('link', { name: 'Finish application' }).click();
  await page.getByText('Choose file').click();
  await page.getByTestId('label-choose-cv-file-0').setInputFiles('resume testting.doc');
  await page.goto('https://test.jobtrain.co.uk/ybscareers/Application/AboutYou?Jobid=20323&section=1&Stage=0&edit=1&QuestionId=0');
});