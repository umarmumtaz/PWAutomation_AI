// pages/JobApplyPage.ts
import { Page, expect } from '@playwright/test';
import { getTestFile } from '../utils/fileUtils';      

export default class AboutYouPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('');
  }

async fillPersonalDetails() {
  await this.page.getByTestId('select-txtTITLE').selectOption('Mr');
  await this.page.getByTestId('txt-txtCURRENTADDRESS').click();
  await this.page.getByTestId('txt-txtCURRENTADDRESS').fill('test');
  await this.page.getByTestId('txt-txtCITYTOWN').click();
  await this.page.getByTestId('txt-txtCITYTOWN').fill('test');
  await this.page.getByTestId('txt-txtCOUNTY').click();
  await this.page.getByTestId('txt-txtCOUNTY').fill('test');
  await this.page.getByTestId('txt-txtPOSTCODE').click();
  await this.page.getByTestId('txt-txtPOSTCODE').fill('332211');
  await this.page.getByTestId('select-txtRELOCATE').selectOption('Yes');
  await this.page.getByTestId('txt-txtTERMCITY').click();
  await this.page.getByTestId('txt-txtTERMCITY').fill('test');
  await this.page.getByTestId('txt-txtTERMCOUNTY').click();
  await this.page.getByTestId('txt-txtTERMCOUNTY').fill('test');

}
async uploadCV() {
    await this.page.getByText('Choose file').click();
   await this.page.getByTestId('label-choose-cv-file-0')
  .setInputFiles('D:/PlaywrightAutomation/PWAutomationAI/resume testting.doc');

    }



    
async  updateEmployment() { 

  await  this.page.getByTestId('btn-ref-edit-0').click();
  await this.page.getByTestId('div-equal-opportunities-form-section').getByRole('textbox', { name: 'Industry' }).click();
  await this.page.getByTestId('div-equal-opportunities-form-section').getByRole('textbox', { name: 'Industry' }).fill('test');
  await this.page.getByRole('textbox', { name: 'Address', exact: true }).click();
  await this.page.getByRole('textbox', { name: 'Address', exact: true }).fill('test');
  await this.page.getByTestId('div-equal-opportunities-form-section').getByRole('textbox', { name: 'City' }).click();
  await this.page.getByTestId('div-equal-opportunities-form-section').getByRole('textbox', { name: 'City' }).fill('test');
  await this.page.getByTestId('div-equal-opportunities-form-section').getByRole('textbox', { name: 'County' }).click();
  await this.page.getByTestId('div-equal-opportunities-form-section').getByRole('textbox', { name: 'County' }).fill('test');
  await this.page.getByLabel('Country').selectOption('1');
  await this.page.getByTestId('div-equal-opportunities-form-section').getByRole('textbox', { name: 'Post Code' }).click();
  await this.page.getByTestId('div-equal-opportunities-form-section').getByRole('textbox', { name: 'Post Code' }).fill('testt');
  await this.page.getByTestId('div-equal-opportunities-form-section').getByRole('textbox', { name: 'Contact Person' }).click();
  await this.page.getByTestId('div-equal-opportunities-form-section').getByRole('textbox', { name: 'Post Code' }).fill('testte');
  await this.page.getByTestId('div-equal-opportunities-form-section').getByRole('textbox', { name: 'Contact Person' }).fill('t');
  await this.page.getByTestId('div-equal-opportunities-form-section').getByRole('textbox', { name: 'Contact Person' }).click();
  await this.page.getByTestId('div-equal-opportunities-form-section').getByRole('textbox', { name: 'Contact Person' }).fill('testt');
  await this.page.getByRole('textbox', { name: 'Job Description*' }).click();
  await this.page.getByRole('textbox', { name: 'Job Description*' }).fill('est');
  await this.page.getByRole('textbox', { name: 'Knowledge Gained*' }).click();
  await this.page.getByRole('textbox', { name: 'Knowledge Gained*' }).fill('test');
  await this.page.getByText('I currently work here').click();
  await this.page.getByRole('textbox', { name: 'Date From*' }).click();
  await this.page.getByRole('button', { name: 'Date 5 March' }).click();
  await this.page.getByTestId('btn-continue').click();

  
}

async   deleteEmployment() {
  await this.page.getByTestId('btn-ref-delete-1').click();
  await this.page.getByTestId('btn-delete-employment').click();
}


async   addEducation() {

await this.page.getByRole('button', { name: 'add_circle' }).first().click();
await this.page.getByRole('textbox', { name: 'University/College*' }).click();
await this.page.getByRole('textbox', { name: 'University/College*' }).fill('punjab university');
await this.page.getByLabel('Sandwich Course').selectOption('Yes');
await this.page.getByRole('textbox', { name: 'Graduation Start Year [e.g.' }).click();
await this.page.getByRole('button', { name: 'Date 23 March' }).first().click();
await this.page.locator('#addQualificationEndDateField').click();
await this.page.getByRole('button', { name: 'Date 28 March' }).nth(1).click();
await this.page.getByText('I currently study here').click();

await this.page.locator('#txtLEVELTYPE').selectOption('10');
  await this.page.getByRole('textbox', { name: 'Course/Degree Subject' }).click();
  await this.page.getByRole('textbox', { name: 'Course/Degree Subject' }).fill('a');
  await this.page.getByRole('textbox', { name: 'Attempts' }).click();
  await this.page.getByRole('textbox', { name: 'Attempts' }).fill('1');
  await this.page.getByRole('textbox', { name: 'Level/Type of Degree *' }).click();
  await this.page.getByRole('textbox', { name: 'Level/Type of Degree *' }).fill('2022');
  await this.page.locator('#txtREAULT').selectOption('8');
  await this.page.getByRole('cell', { name: 'Level/Type of Degree * Answer' }).getByLabel('Level/Type of Degree *').selectOption('Obtained');
  await this.page.getByRole('button', { name: 'Save', exact: true }).click();


}

async   deleteEducation() {
  await this.page.getByRole('button', { name: 'delete' }).nth(2).click();
  await this.page.getByRole('button', { name: 'Delete', exact: true }).click();
}



async   addotherEducation() {    

await this.page.getByRole('button', { name: 'add_circle' }).nth(2).click();
await this.page.getByRole('textbox', { name: 'Other Details' }).fill('other education');
await this.page.getByRole('button', { name: 'Save', exact: true }).click();

}

async  updateEducation() {

await this.page.getByRole('button', { name: 'edit' }).nth(1).click();
await this.page.getByRole('textbox', { name: 'Level' }).click();
await this.page.getByRole('textbox', { name: 'Level' }).fill('a');
await this.page.getByRole('textbox', { name: 'Result' }).click();
await this.page.getByRole('textbox', { name: 'Result' }).fill('1');
await this.page.getByRole('textbox', { name: 'Subject *' }).click();
await this.page.getByRole('textbox', { name: 'Subject *' }).fill('2026');
await this.page.getByRole('button', { name: 'Save', exact: true }).click();


}

async uploadCVdebugging(fileName: string) {

    // Upload file from resources folder
    await this.page.getByText('Choose file')
      .setInputFiles(getTestFile('resume.doc'));

    // Handle optional popup
    const closeButton = this.page.getByRole('button', { name: 'Close' });
    if (await closeButton.isVisible()) {
      await closeButton.click();
    }
    }





}