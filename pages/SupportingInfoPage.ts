import {page, expect } from '@playwright/test';
export default class SupportingInfoPage {
  constructor(private page: page) {}    



 async fillSupportingInfo() {

await page.getByTestId('a-supporting-info').click();
  await page.getByTestId('btn-open-emp-model-section').click();
  await page.getByRole('textbox', { name: 'Employment Referee* Employer' }).click();
  await page.getByRole('textbox', { name: 'Employment Referee* Employer' }).fill('et employment');
  await page.getByRole('textbox', { name: 'Employer', exact: true }).click();
  await page.getByRole('textbox', { name: 'Employer', exact: true }).fill('nanncy');
  await page.getByRole('textbox', { name: 'Position', exact: true }).click();
  await page.getByRole('textbox', { name: 'Employer', exact: true }).fill('nanncyt');
  await page.getByRole('textbox', { name: 'Position', exact: true }).fill('est');
  await page.getByRole('textbox', { name: 'Address', exact: true }).click();
  await page.getByRole('textbox', { name: 'Address', exact: true }).fill('test address');
  await page.getByRole('textbox', { name: 'City/Town', exact: true }).click();
  await page.getByRole('textbox', { name: 'City/Town', exact: true }).fill('test town');
  await page.getByRole('textbox', { name: 'County', exact: true }).click();
  await page.getByRole('textbox', { name: 'County', exact: true }).fill('UK');
  await page.getByRole('textbox', { name: 'Postcode', exact: true }).click();
  await page.getByRole('textbox', { name: 'Postcode', exact: true }).fill('33333323');
  await page.getByRole('textbox', { name: 'Telephone', exact: true }).click();
  await page.getByRole('textbox', { name: 'Postcode', exact: true }).fill('333333234');
  await page.getByRole('textbox', { name: 'Telephone', exact: true }).fill('234234234234');
  await page.getByRole('textbox', { name: 'Email*' }).click();
  await page.getByRole('textbox', { name: 'Email*' }).fill('nanncykevin@gmail.com');
  await page.getByTestId('btn-continue').click();

    }

asynsync additionalInfo() {
    await page.getByRole('textbox', { name: 'Influencing, communication' }).click();
  await page.getByRole('textbox', { name: 'Influencing, communication' }).fill('test');
  await page.getByRole('textbox', { name: 'Analysis, problem solving and' }).click();
  await page.getByRole('textbox', { name: 'Influencing, communication' }).fill('testte');
  await page.getByRole('textbox', { name: 'Analysis, problem solving and' }).fill('st');
  await page.getByRole('textbox', { name: 'Career Choice' }).click();
  await page.getByRole('textbox', { name: 'Career Choice' }).fill('test');
  await page.getByRole('textbox', { name: 'Specific Skills' }).click();
  await page.getByRole('textbox', { name: 'Specific Skills' }).fill('test');
  await page.getByRole('textbox', { name: 'Additional Information' }).click();
  await page.getByRole('textbox', { name: 'Additional Information' }).fill('test');
  await page.getByRole('textbox', { name: 'Interests' }).click();
  await page.getByRole('textbox', { name: 'Interests' }).fill('test');
  await page.getByRole('button', { name: 'Save and exit' }).click();
  await page.getByRole('button', { name: 'Confirm' }).click();



}
