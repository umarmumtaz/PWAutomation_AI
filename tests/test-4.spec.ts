import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Recording...
  await page.goto('https://test.jobtrain.co.uk/ybscareers/Home/Job');
  await page.getByRole('button', { name: 'person_outline Hi paul' }).click();
  await page.getByRole('button', { name: 'person_outline Hi paul' }).click();
  await page.getByRole('link', { name: 'work My Applications' }).click();
  await page.getByRole('button', { name: 'Close' }).click();
  await page.getByTestId('btn-edit-20323').click();
  await page.getByRole('link', { name: 'Finish application' }).click();
  await page.getByTestId('btn-ref-edit-0').click();
  await page.getByRole('textbox', { name: 'Responsibilities*' }).click();
  await page.getByRole('textbox', { name: 'Responsibilities*' }).fill('test');
  await page.getByTestId('div-equal-opportunities-form-section').getByRole('textbox', { name: 'Industry' }).click();
  await page.getByTestId('div-equal-opportunities-form-section').getByRole('textbox', { name: 'Industry' }).fill('test industryte');
  await page.getByTestId('div-equal-opportunities-form-section').getByRole('textbox', { name: 'Address', exact: true }).click();
  await page.getByTestId('div-equal-opportunities-form-section').getByRole('textbox', { name: 'Industry' }).fill('test industrytest');
  await page.getByTestId('div-equal-opportunities-form-section').getByRole('textbox', { name: 'Address', exact: true }).click();
  await page.getByTestId('div-equal-opportunities-form-section').getByRole('textbox', { name: 'Address', exact: true }).fill('test addresst');
  await page.getByTestId('div-equal-opportunities-form-section').getByRole('textbox', { name: 'City' }).click();
  await page.getByTestId('div-equal-opportunities-form-section').getByRole('textbox', { name: 'Address', exact: true }).fill('test addresste');
  await page.getByTestId('div-equal-opportunities-form-section').getByRole('textbox', { name: 'City' }).fill('st');
  await page.getByTestId('div-equal-opportunities-form-section').getByRole('textbox', { name: 'City' }).click();
  await page.getByTestId('div-equal-opportunities-form-section').getByRole('textbox', { name: 'City' }).fill('sttest city');
  await page.getByTestId('div-equal-opportunities-form-section').getByRole('textbox', { name: 'County' }).click();
  await page.getByTestId('div-equal-opportunities-form-section').getByRole('textbox', { name: 'County' }).fill('UK');
  await page.getByTestId('div-equal-opportunities-form-section').getByRole('textbox', { name: 'Post Code' }).click();
  await page.getByTestId('div-equal-opportunities-form-section').getByRole('textbox', { name: 'Post Code' }).fill('321654');
  await page.getByTestId('div-equal-opportunities-form-section').getByRole('textbox', { name: 'Contact Person' }).click();
  await page.getByTestId('div-equal-opportunities-form-section').getByRole('textbox', { name: 'Contact Person' }).fill('nanncy');
  await page.locator('#currentlyWork').click();
  await page.getByText('I currently work here').click();
  await page.getByRole('textbox', { name: 'Start Date' }).click();
  await page.getByRole('cell', { name: '27' }).first().click();
  await page.goto('https://test.jobtrain.co.uk/ybscareers/Application/AboutYou?Jobid=20323&section=1&Stage=0&edit=1&QuestionId=0');
});