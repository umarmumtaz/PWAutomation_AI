
import { test, expect } from "@playwright/test";
import ApplyWizardPage from "../pages/ApplyWizardPage";
import { saveUserData } from "../utils/userUtils";
import { RegisterPage } from "../pages/RegisterPage";
import { getTestFile } from "../utils/fileUtils";
import AboutYouPage from "../pages/AboutYouPage";
import { saveApplicationData, readApplicationData } from "../utils/jsonHelper";
import { compareApplicationData } from "../utils/dataComparator";
import{ selectDate } from "../utils/fileUtils";


test.describe.serial("Apply for job flow with register e2e", () => {
  // test.beforeEach(async ({ page }) => {
  //     await page.goto('');
});

test("@smoke Apply for job flow", async ({ page }) => {
  const applyWizardPage = new ApplyWizardPage(page);
  await page.goto("");
  await page.locator('[data-test="a-sign-in"]').click();
  await applyWizardPage.registerPage.clickOnHaveNotAccountButton();
  await applyWizardPage.registerPage.verifyTheRegister1PageTitle();
  await applyWizardPage.registerPage.completeRegistration();
  await page.waitForLoadState("networkidle");
  await page.getByTestId("a-home-link").click();
  await applyWizardPage.JobApplyPage.clickonJob();
  await applyWizardPage.JobApplyPage.applyJob();
  await applyWizardPage.JobApplyPage.verifyTheJobTitle();
  const testData = { cvFile: 'resume.doc' };
  await applyWizardPage.aboutYouPage.uploadCV(testData.cvFile);

  await page.waitForLoadState("networkidle");
  await applyWizardPage.aboutYouPage.updateEmployment();
  await applyWizardPage.aboutYouPage.deleteEmployment();
  await applyWizardPage.aboutYouPage.addEducation();
  await applyWizardPage.aboutYouPage.deleteEducation();
  await applyWizardPage.aboutYouPage.addOtherEducation();
  await applyWizardPage.aboutYouPage.fillPersonalDetails();
  await applyWizardPage.aboutYouPage.updateEducation();
  await page.getByRole("button", { name: "Continue" }).click();
  await page.waitForLoadState("networkidle");
  await applyWizardPage.supportingInfoPage.fillSupportingInfo();
  await applyWizardPage.supportingInfoPage.additionalInfo();
  await page.getByRole("button", { name: "Continue" }).click();
  await page.waitForLoadState("networkidle");
  await applyWizardPage.equaloppsPage.fillEqualopps();
  await page.getByTestId("btn-continue").click();
  await page.waitForLoadState("networkidle");
  await applyWizardPage.declarationPage.clickAgreeButton();
  await applyWizardPage.declarationPage.enterEmailLineManager();
  await applyWizardPage.declarationPage.clickSubmitButton();
  await applyWizardPage.declarationPage.clickCandidateHomeLink();
  await applyWizardPage.declarationPage.accountRecoveryPopup();

  const candidateData =
    await applyWizardPage.exportApplicationData();

/*
================================
STEP 2 → Save JSON
================================
*/

saveApplicationData(
  candidateData,
  'candidate-application'
);

console.log(candidateData);

});







test.only("for debugging purpose ", async ({ page }) => {

await page.goto('https://test.jobtrain.co.uk/voyagecare/');
  await page.waitForLoadState('networkidle');
  await page.locator('[data-test="a-sign-in"]').click();
  await page.getByTestId('txt-email').fill('ozzdrn05ld@gmail.com');
  await page.getByTestId("txt-password").fill('Testing@123');
  await page.getByRole('button', { name: 'Sign in' }).click();
await page.goto ('https://test.jobtrain.co.uk/voyagecare/Application/AboutYou?Jobid=535&section=1&Stage=0&edit=1&QuestionId=0');
await page.getByTestId("btn-ref-edit-0").click();
//<addcorrect url and then date picker logic>


 await selectDate(page, "2024", "March", "20");

});

//issue in storage state

//date issue across the script
//cv issue with debugging 
//then extract data
//need to check the about you page