// pages/JobApplyPage.ts
import { Page, expect } from "@playwright/test";
import { getTestFile } from "../utils/fileUtils";


export default class AboutYouPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto("");
  }

  async fillPersonalDetails() {
    await this.page.getByTestId("select-txtTITLE").selectOption("Mr");
    await this.page.getByTestId("txt-txtCURRENTADDRESS").click();
    await this.page.getByTestId("txt-txtCURRENTADDRESS").fill("test");
    await this.page.getByTestId("txt-txtCITYTOWN").click();
    await this.page.getByTestId("txt-txtCITYTOWN").fill("test");
    await this.page.getByTestId("txt-txtCOUNTY").click();
    await this.page.getByTestId("txt-txtCOUNTY").fill("test");
    await this.page.getByTestId("txt-txtPOSTCODE").click();
    await this.page.getByTestId("txt-txtPOSTCODE").fill("332211");
    await this.page.getByTestId("select-txtRELOCATE").selectOption("Yes");
    await this.page.getByTestId("txt-txtTERMCITY").click();
    await this.page.getByTestId("txt-txtTERMCITY").fill("test");
    await this.page.getByTestId("txt-txtTERMCOUNTY").click();
    await this.page.getByTestId("txt-txtTERMCOUNTY").fill("test");
  }
  // async uploadCV() {
  //     await this.page.getByText('Choose file').click();
  //    await this.page.getByTestId('label-choose-cv-file-0')
  //   .setInputFiles('D:/PlaywrightAutomation/PWAutomationAI/resume testting.doc');

  //     }
//issue
  async updateEmployment() {
 await this.page.getByTestId("btn-ref-edit-0").click();

  await this.page.getByTestId("div-equal-opportunities-form-section").getByRole("textbox", { name: "Industry" }).fill("test");
  await this.page.getByRole("textbox", { name: "Address", exact: true }).fill("test");
  await this.page.getByTestId("div-equal-opportunities-form-section").getByRole("textbox", { name: "City" }).fill("test");
  await this.page.getByTestId("div-equal-opportunities-form-section").getByRole("textbox", { name: "County" }).fill("test");
  await this.page.getByLabel("Country").selectOption("1");
  await this.page.getByTestId("div-equal-opportunities-form-section").getByRole("textbox", { name: "Post Code" }).fill("testt");
  await this.page.getByTestId("div-equal-opportunities-form-section").getByRole("textbox", { name: "Contact Person" }).fill("testt");
  await this.page.getByRole("textbox", { name: "Job Description*" }).fill("test");
  await this.page.getByRole("textbox", { name: "Knowledge Gained*" }).fill("test");
  await this.page.getByText("I currently work here").click();
  
  }



  
  async deleteEmployment() {
    await this.page.getByTestId("btn-ref-delete-1").click();
    await this.page.getByTestId("btn-delete-employment").click();
  }
async addEducation() { 
 await this.page.getByRole("button", { name: "add_circle" }).first().click();
  await this.page.getByRole("textbox", { name: "University/College*" }).fill("punjab university");
  await this.page.getByLabel("Sandwich Course").selectOption("Yes");

  await this.page.locator('#txtLEVELTYPE').selectOption('10');
  await this.page.getByRole('textbox', { name: 'Course/Degree Subject' }).click();
  await this.page.getByRole('textbox', { name: 'Course/Degree Subject' }).fill('PU');
  await this.page.getByRole('textbox', { name: 'Attempts' }).click();
  await this.page.getByRole('textbox', { name: 'Attempts' }).fill('1');
  await this.page.getByRole('textbox', { name: 'Level/Type of Degree *' }).click();
  await this.page.getByRole('textbox', { name: 'Level/Type of Degree *' }).fill('2005');
  await this.page.locator('#txtREAULT').selectOption('5');
  await this.page.getByRole('cell', { name: 'Level/Type of Degree * Answer' }).getByLabel('Level/Type of Degree *').selectOption('Obtained');
  await this.page.getByRole("button", { name: "Save", exact: true }).click();
}

async deleteEducation() {
  await this.page.getByRole("button", { name: "delete" }).nth(2).click();
  await this.page.getByRole("button", { name: "Delete", exact: true }).click();
}

async addOtherEducation() {
  await this.page.getByRole("button", { name: "add_circle" }).nth(2).click();
  await this.page.getByRole("textbox", { name: "Other Details" }).fill("other education");
  await this.page.getByRole("button", { name: "Save", exact: true }).click();
}

  
  async updateEducation() {
    await this.page.getByRole("button", { name: "edit" }).nth(1).click();
    await this.page.getByRole("textbox", { name: "Level" }).click();
    await this.page.getByRole("textbox", { name: "Level" }).fill("a");
    await this.page.getByRole("textbox", { name: "Result" }).click();
    await this.page.getByRole("textbox", { name: "Result" }).fill("1");
    await this.page.getByRole("textbox", { name: "Subject *" }).click();
    await this.page.getByRole("textbox", { name: "Subject *" }).fill("2026");
    await this.page.getByRole("button", { name: "Save", exact: true }).click();
  }

  // async uploadCVdebugging(fileName: string) {

  //     // Upload file from resources folder
  //     await this.page.getByText('Choose file')
  //       .setInputFiles(getTestFile('resume.doc'));

  //     // Handle optional popup
  //     const closeButton = this.page.getByRole('button', { name: 'Close' });
  //     if (await closeButton.isVisible()) {
  //       await closeButton.click();
  //     }
  //     }

  async uploadCV(fileName: string) {
    await this.page.getByTestId("label-choose-cv-file-0").setInputFiles(getTestFile(fileName));

    const closeButton = this.page.getByRole("button", { name: "Close" });
    if (await closeButton.isVisible()) {
await closeButton.click();
    }
  }
//data extraction fill data extract data
async extractCandidateApplicationData() {

  /*
  ============================
  PERSONAL DETAILS
  ============================
  */

  const personalDetails = {
     title: await this.page.getByTestId('select-txtTITLE').inputValue(),
    currentAddress: await this.page .getByTestId('txt-txtCURRENTADDRESS') .inputValue(),
    city: await this.page .getByTestId('txt-txtCITYTOWN') .inputValue(),
    county: await this.page.getByTestId('txt-txtCOUNTY') .inputValue(),
    postcode: await this.page .getByTestId('txt-txtPOSTCODE') .inputValue(),
    relocate: await this.page.getByTestId('select-txtRELOCATE') .inputValue(),
    termCity:await this.page.getByTestId('txt-txtTERMCITY').inputValue(),
    termCounty:await this.page.getByTestId('txt-txtTERMCOUNTY') .inputValue(),
  };

  /*
  ============================
  EDUCATION
  ============================
  */

  const education = {
    university: await this.page .getByRole('textbox', { name: 'University/College*' }).inputValue(),

    subject:await this.page.getByRole('textbox', { name: 'Course/Degree Subject' }).inputValue(),
  };

  /*
  ============================
  EMPLOYMENT
  ============================
  */

  const employment = {
    
    industry: await this.page .getByRole('textbox', { name: 'Industry' }).inputValue(),
    city: await this.page.getByRole('textbox', { name: 'City'}) .inputValue(),
    county:await this.page.getByRole('textbox', { name: 'County' }).inputValue(),
    contactPerson:await this.page.getByRole('textbox', { name: 'Contact Person'}).inputValue(),
  };

  /*
  ============================
  RETURN COMPLETE OBJECT
  ============================
  */

  return {
    personalDetails,
    education,
    employment
  };
}
}
