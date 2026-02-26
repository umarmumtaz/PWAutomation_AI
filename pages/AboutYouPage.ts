// pages/JobApplyPage.ts
import { Page, expect } from '@playwright/test';

export default class AboutYouPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('');
  }

async fillPersonalDetails() {
    await this.page.getByTestId('select-txtTITLE').selectOption('Miss');
    await this.page.getByTestId('txt-txtCURRENTADDRESS').fill('Test address');
    await this.page.getByTestId('txt-txtCITYTOWN').fill('Test town');
    await this.page.getByTestId('txt-txtPOSTCODE').fill('WA141EZ');
    await this.page.getByRole('textbox', { name: 'What salary or day rate are' }).fill('12000');

}
async uploadCV() {
    await this.page.getByText('Choose file').click();
    await this.page.getByTestId('label-choose-cv-file-0').setInputFiles('resume testting.doc');

    }
async   updateEmployment() { 

 await  this.page.getByTestId('btn-ref-edit-0').click();
  await this.page.getByRole('textbox', { name: 'Responsibilities*' }).click();
  await this.page.getByRole('textbox', { name: 'Responsibilities*' }).fill('test');
  await this.page.getByTestId('div-equal-opportunities-form-section').getByRole('textbox', { name: 'Industry' }).click();
  await this.page.getByTestId('div-equal-opportunities-form-section').getByRole('textbox', { name: 'Industry' }).fill('test industryte');
  await this.page.getByTestId('div-equal-opportunities-form-section').getByRole('textbox', { name: 'Address', exact: true }).click();
  await this.page.getByTestId('div-equal-opportunities-form-section').getByRole('textbox', { name: 'Industry' }).fill('test industrytest');
  await this.page.getByTestId('div-equal-opportunities-form-section').getByRole('textbox', { name: 'Address', exact: true }).click();
  await this.page.getByTestId('div-equal-opportunities-form-section').getByRole('textbox', { name: 'Address', exact: true }).fill('test address');
  await this.page.getByTestId('div-equal-opportunities-form-section').getByRole('textbox', { name: 'City' }).fill('sttest city');
  await this.page.getByTestId('div-equal-opportunities-form-section').getByRole('textbox', { name: 'County' }).click();
  await this.page.getByTestId('div-equal-opportunities-form-section').getByRole('textbox', { name: 'County' }).fill('UK');
  await this.page.getByTestId('div-equal-opportunities-form-section').getByRole('textbox', { name: 'Post Code' }).click();
  await this.page.getByTestId('div-equal-opportunities-form-section').getByRole('textbox', { name: 'Post Code' }).fill('321654');
  await this.page.getByTestId('div-equal-opportunities-form-section').getByRole('textbox', { name: 'Contact Person' }).click();
  await this.page.getByTestId('div-equal-opportunities-form-section').getByRole('textbox', { name: 'Contact Person' }).fill('nanncy');
  await this.page.locator('#currentlyWork').click();
  await this.page.getByText('I currently work here').click();
  await this.page.getByRole('textbox', { name: 'Start Date' }).click();
  await this.page.getByRole('cell', { name: '27' }).first().click();

  
}

async   deleteEmployment() {
  await this.page.getByTestId('btn-ref-delete-1').click();
  await this.page.getByTestId('btn-delete-employment').click();
}


async   addEducation() {
  await this.page.getByRole('button', { name: 'add_circle' }).nth(1).click();
  await this.page.getByRole('textbox', { name: 'Academic Institute Attended' }).click();
  await this.page.getByRole('textbox', { name: 'Academic Institute Attended' }).fill('punjab university');
  await this.page.getByRole('textbox', { name: 'Date qualification achieved' }).click();
  await this.page.getByRole('textbox', { name: 'Date qualification achieved' }).fill('2026');
  await this.page.getByRole('textbox', { name: 'Course Studied' }).click();
  await this.page.getByRole('textbox', { name: 'Course Studied' }).fill('IT');
  await this.page.getByRole('button', { name: 'Save', exact: true }).click();


}

async   deleteEducation() {
  await this.page.getByRole('button', { name: 'delete' }).nth(3).click();
  await this.page.getByRole('button', { name: 'Delete', exact: true }).click();
}



async   addotherEducation() {    

  await this.page.getByRole('button', { name: 'add_circle' }).nth(2).click();
  await this.page.getByRole('textbox', { name: 'Do you have or are studying' }).click();
  await this.page.getByRole('textbox', { name: 'Do you have or are studying' }).fill('terst details');
  await this.page.getByRole('button', { name: 'Save', exact: true }).click();

}













}