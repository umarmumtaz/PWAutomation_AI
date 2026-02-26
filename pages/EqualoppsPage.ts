import {expect, Page} from '@playwright/test';

export class EqualoppsPage {
   constructor(private page: Page) {}    

   
async fillEqualopps() {
  await page.getByTestId('a-equal-opportunities').click();
  await page.getByTestId('select-txtSEX').selectOption('F');
  await page.getByRole('textbox', { name: 'txtDATEOFBIRTH' }).click();
  await page.getByRole('textbox', { name: 'txtDATEOFBIRTH' }).fill('10/20/2000');
  await page.getByTestId('div-equal-opportunities-container').click();
  await page.getByTestId('div-equal-opportunities-container').click();
  await page.getByLabel('Marital Status/Civil').selectOption('M');
  await page.getByLabel('What is your ethnicity?').selectOption('10');
  await page.getByLabel('Nationality').selectOption('9');
  await page.getByLabel('Age Range').selectOption('4');
  await page.getByLabel('Do you have any dependants,').selectOption('Yes');
  await page.getByLabel('Two Ticks').selectOption('1');
  await page.getByTestId('btn-save-and-exit').click();
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.getByRole('button', { name: 'Close' }).click();

}


}