import {Page, expect } from '@playwright/test';
export default class SupportingInfoPage {
  constructor(private page: Page) {}    



 async fillSupportingInfo() {
await this.page.getByTestId('btn-open-emp-model-section').click();
await this.page.getByRole('textbox', { name: 'Employment Referee* Employer' }).click();
await this.page.getByRole('textbox', { name: 'Employment Referee* Employer' }).fill('test');
await this.page.getByLabel('Reference Type').selectOption('Current Employer');
await this.page.getByRole('textbox', { name: 'Employer', exact: true }).click();
await this.page.getByRole('textbox', { name: 'Employer', exact: true }).fill('est');
await this.page.getByRole('textbox', { name: 'Position', exact: true }).click();
await this.page.getByRole('textbox', { name: 'Position', exact: true }).fill('est');
await this.page.getByRole('textbox', { name: 'Address', exact: true }).click();
await this.page.getByRole('textbox', { name: 'Address', exact: true }).fill('test');
await this.page.getByRole('textbox', { name: 'City/Town', exact: true }).click();
await this.page.getByRole('textbox', { name: 'City/Town', exact: true }).fill('est');
await this.page.getByRole('textbox', { name: 'County', exact: true }).click();
await this.page.getByRole('textbox', { name: 'County', exact: true }).fill('test');
await this.page.getByRole('textbox', { name: 'Postcode', exact: true }).click();
await this.page.getByRole('textbox', { name: 'County', exact: true }).fill('test23');
await this.page.getByRole('textbox', { name: 'Postcode', exact: true }).fill('323223');
await this.page.getByRole('textbox', { name: 'Telephone', exact: true }).click();
await this.page.getByRole('textbox', { name: 'Postcode', exact: true }).fill('32322323');
await this.page.getByRole('textbox', { name: 'Telephone', exact: true }).fill('32333232');
await this.page.getByRole('textbox', { name: 'Email*' }).click();
await this.page.getByRole('textbox', { name: 'Email*' }).fill('nanncy@gmail.com');
await this.page.getByTestId('btn-continue').click();
await this.page.getByTestId('btn-ref-copy-0').click();

    }

async additionalInfo() {
await this.page.getByRole('textbox', { name: 'Influencing, communication' }).click();
await this.page.getByRole('textbox', { name: 'Influencing, communication' }).fill('test');
await this.page.getByRole('textbox', { name: 'Analysis, problem solving and' }).click();
await this.page.getByRole('textbox', { name: 'Analysis, problem solving and' }).fill('test');
await this.page.getByRole('textbox', { name: 'Career Choice' }).click();
await this.page.getByRole('textbox', { name: 'Career Choice' }).fill('test');
await this.page.getByRole('textbox', { name: 'Specific Skills' }).click();
await this.page.getByRole('textbox', { name: 'Specific Skills' }).fill('test');
await this.page.getByRole('textbox', { name: 'Additional Information' }).click();
await this.page.getByRole('textbox', { name: 'Additional Information' }).fill('test');
await this.page.getByRole('textbox', { name: 'Interests' }).click();
await this.page.getByRole('textbox', { name: 'Interests' }).fill('test');



}
}