import {expect, Page} from '@playwright/test';

export class EqualoppsPage {
   constructor(public page: Page) {}    

   
async fillEqualopps() {
  await this.page.getByTestId('select-txtSEX').selectOption('P');
await this.page.getByLabel('Is the gender you identify').selectOption('No');
await this.page.getByTestId('select-gender-identity').selectOption('F');
await this.page.getByLabel('Marital Status').selectOption('M');
await this.page.getByLabel('Nationality').selectOption('11');

}


};