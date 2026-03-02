import {expect, Page} from '@playwright/test';

export class EqualoppsPage {
   constructor(public page: Page) {}    

   
async fillEqualopps() {
  await this.page.getByTestId('a-equal-opportunities').click();
  await this.page.getByTestId('select-txtSEX').selectOption('F');
  await this.page.getByRole('textbox', { name: 'txtDATEOFBIRTH' }).click();
  await this.page.getByRole('textbox', { name: 'txtDATEOFBIRTH' }).fill('10/20/2000');
  await this.page.getByTestId('div-equal-opportunities-container').click();
  await this.page.getByTestId('div-equal-opportunities-container').click();
  await this.page.getByLabel('Marital Status/Civil').selectOption('M');
  await this.page.getByLabel('What is your ethnicity?').selectOption('10');
  await this.page.getByLabel('Nationality').selectOption('9');
  await this.page.getByLabel('Age Range').selectOption('4');
  await this.page.getByLabel('Do you have any dependants,').selectOption('Yes');
  await this.page.getByLabel('Two Ticks').selectOption('1');
  await this.page.getByTestId('btn-save-and-exit').click();
  await this.page.getByRole('button', { name: 'Confirm' }).click();
  await this.page.getByRole('button', { name: 'Close' }).click();

}


};