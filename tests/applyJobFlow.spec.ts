
/*
import {test, expect } from "@playwright/test";
import ApplyWizardPage from "../pages/ApplyWizardPage";
import { saveUserData } from "../utils/userUtils";
import { RegisterPage } from "../pages/RegisterPage";


test.describe.serial('Apply for job flow tests', () => {
    // test.beforeEach(async ({ page }) => {
    //     await page.goto('');
    });


test("@smoke Register an Account", async ({ page }) => {
  await page.goto('');
  await page.locator('[data-test="a-sign-in"]').click();
  const registerPage = new RegisterPage(page);
  await registerPage.clickOnHaveNotAccountButton();
  await registerPage.verifyTheRegister1PageTitle();
  // Generate random email and register the account
  const emailForRegistration = registerPage.randomEmail;
  const passwordForRegistration = "Testing@123";
  await registerPage.validRegisterCredentials();
  await page.getByTestId("txt-create-a-password").fill(passwordForRegistration);
   //space for enabling the button
  await page.keyboard.press('Space'); 
  await page.getByTestId("txt-create-a-password").press('Backspace');
 
  await page.waitForLoadState('networkidle'); //it alos added in the email need to fix
  await page.locator('#register').click();
  const secodPageHeading = await page.locator('.register__title.text-primary.h3');
  await expect(secodPageHeading).toHaveText('A couple more things');
  await page.getByPlaceholder('First name').fill('paul');
  await page.getByPlaceholder('Last name').fill('walker');
  await page.keyboard.press('Space'); 
  await page.getByPlaceholder('Last name').press('Backspace');
  await page.getByPlaceholder('Mobile number').fill('00441172345678');
  // Check if the checkbox is visible
  await expect(page.getByText('I agree to the terms and')).toBeVisible();
  // Check if the checkbox is enabled
  await page.getByText('I agree to the').click();
  await page.waitForLoadState('networkidle');
  await page.locator('#continue').click();
  await page.context().storageState({ path: 'storage/state.json' });
  saveUserData(emailForRegistration, passwordForRegistration);

});


    test  ('@smoke Apply for job flow', async ({ page }) => {
        const applyWizardPage = new ApplyWizardPage(page);
        await page.goto('');
        await page.locator('[data-test="a-sign-in"]').click(); 
        await applyWizardPage.registerPage.clickOnHaveNotAccountButton();
        await applyWizardPage.registerPage.verifyTheRegister1PageTitle();
        await applyWizardPage.registerPage.validRegisterCredentials();
        await page.waitForLoadState('networkidle'); 
        await page.getByTestId('a-home-link').click();
        await applyWizardPage.JobApplyPage.clickonJob();
        await applyWizardPage.JobApplyPage.applyJob();
        await applyWizardPage.JobApplyPage.verifyTheJobTitle();    
        await applyWizardPage.aboutYouPage.uploadCV();
        await applyWizardPage.aboutYouPage.updateEmployment();
        await applyWizardPage.aboutYouPage.deleteEmployment();
        await applyWizardPage.aboutYouPage.addEducation();
        await applyWizardPage.aboutYouPage.deleteEducation();
        await applyWizardPage.aboutYouPage.addotherEducation();
        await applyWizardPage.aboutYouPage.fillPersonalDetails();
        await page.waitForLoadState('networkidle');
        await applyWizardPage.supportingInfoPage.fillSupportingInfo();
        await page.waitForLoadState('networkidle');
        await applyWizardPage.supportingInfoPage.additionalInfo();
        await page.waitForLoadState('networkidle');
        await applyWizardPage.equaloppsPage.fillEqualopps();
        await page.waitForLoadState('networkidle');
        await applyWizardPage.declarationPage.clickAgreeButton();
        await page.waitForLoadState('networkidle');
        await applyWizardPage.declarationPage.clickSubmitButton();
        await applyWizardPage.declarationPage.clickCandidateHomeLink();
        
    })


*/


//chat gpt solution
/*
import { test } from "@playwright/test";
import ApplyWizardPage from "../pages/ApplyWizardPage";

test('Apply for job flow', async ({ page }) => {

  const wizard = new ApplyWizardPage(page);

  await page.goto('');

  await wizard.JobApplyPage.clickonJob();
  await wizard.JobApplyPage.applyJob();
  await wizard.JobApplyPage.verifyTheJobTitle();

  await wizard.aboutYouPage.uploadCV();
  await wizard.aboutYouPage.updateEmployment();
  await wizard.aboutYouPage.addEducation();
  await wizard.aboutYouPage.fillPersonalDetails();

  await wizard.supportingInfoPage.fillSupportingInfo();
  await wizard.supportingInfoPage.additionalInfo();

  await wizard.equaloppsPage.fillEqualopps();

  await wizard.declarationPage.clickAgreeButton();
  await wizard.declarationPage.clickSubmitButton();
  await wizard.declarationPage.clickCandidateHomeLink();
});



*/



import { test } from "@playwright/test";
import { RegisterPage } from "../pages/RegisterPage";
import ApplyWizardPage from "../pages/ApplyWizardPage";
import { saveUserData } from "../utils/userUtils";

test('@smoke Apply job end-to-end', async ({ page }) => {

  await page.goto('');

  // 🔐 Register
  const register = new RegisterPage(page);
  await register.navigateToRegister();
  const credentials = await register.completeRegistration();

  await page.context().storageState({ path: 'storage/state.json' });
  saveUserData(credentials.email, credentials.password);

  // 🧙 Apply Wizard
  const wizard = new ApplyWizardPage(page);

  await page.getByTestId('a-home-link').click();
  await wizard.JobApplyPage.clickonJob();
  await wizard.JobApplyPage.applyJob();

  await wizard.aboutYouPage.uploadCV();
  await wizard.aboutYouPage.fillPersonalDetails();
  await wizard.aboutYouPage.updateEmployment();
await wizard.aboutYouPage.deleteEmployment();
await wizard.aboutYouPage.addEducation();
await wizard.aboutYouPage.deleteEducation();
await wizard.aboutYouPage.addotherEducation();

await wizard.supportingInfoPage.fillSupportingInfo();
await wizard.equaloppsPage.fillEqualopps();

await wizard.declarationPage.clickAgreeButton();
  await wizard.declarationPage.clickSubmitButton();
});