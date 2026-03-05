import { test, expect } from "@playwright/test";
import ApplyWizardPage from "../pages/ApplyWizardPage";
import { saveUserData } from "../utils/userUtils";
import { RegisterPage } from "../pages/RegisterPage";
import { getTestFile } from "../utils/fileUtils";
import AboutYouPage from "../pages/AboutYouPage";


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
  await applyWizardPage.aboutYouPage.addotherEducation();
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

});

test("for debugging purpose ", async ({ page }) => {

await page.goto('https://test.jobtrain.co.uk/voyagecare/');
  await page.waitForLoadState('networkidle');

//issue in storage state

});





