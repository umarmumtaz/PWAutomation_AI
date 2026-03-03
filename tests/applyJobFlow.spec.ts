import {test, expect } from "@playwright/test";
import ApplyWizardPage from "../pages/ApplyWizardPage";
import { saveUserData } from "../utils/userUtils";
import { RegisterPage } from "../pages/RegisterPage";

test.describe.serial('Apply for job flow tests', () => {
    // test.beforeEach(async ({ page }) => {
    //     await page.goto('');
    });


    test  ('@smoke Apply for job flow', async ({ page }) => {
        const applyWizardPage = new ApplyWizardPage(page);
        await page.goto('');
        await page.locator('[data-test="a-sign-in"]').click(); 
        await applyWizardPage.registerPage.clickOnHaveNotAccountButton();
        await applyWizardPage.registerPage.verifyTheRegister1PageTitle();
        await applyWizardPage.registerPage.completeRegistration();
        await page.waitForLoadState('networkidle'); 
        await page.getByTestId('a-home-link').click();
        //apply to a job voyage care
        await applyWizardPage.JobApplyPage.clickonJob();
        await applyWizardPage.JobApplyPage.applyJob();
        await applyWizardPage.JobApplyPage.verifyTheJobTitle();  
        //issue with cv popup  
        await applyWizardPage.aboutYouPage.uploadCV();
        
         await applyWizardPage.aboutYouPage.updateEmployment();
await applyWizardPage.aboutYouPage.deleteEmployment();
await applyWizardPage.aboutYouPage.addEducation();
 await applyWizardPage.aboutYouPage.deleteEducation();
await applyWizardPage.aboutYouPage.addotherEducation();
await applyWizardPage.aboutYouPage.fillPersonalDetails();
await applyWizardPage.aboutYouPage.updateEducation();
await page.getByRole('button', { name: 'Continue' }).click();
await page.waitForLoadState('networkidle');
await applyWizardPage.supportingInfoPage.fillSupportingInfo();
   await applyWizardPage.supportingInfoPage.additionalInfo();
await page.getByRole('button', { name: 'Continue' }).click();
await page.waitForLoadState('networkidle');
await applyWizardPage.equaloppsPage.fillEqualopps();
await page.getByTestId('btn-continue').click();
await page.waitForLoadState('networkidle');
await applyWizardPage.declarationPage.clickAgreeButton();
await applyWizardPage.declarationPage.enterEmailLineManager();
await applyWizardPage.declarationPage.clickSubmitButton();
await applyWizardPage.declarationPage.clickCandidateHomeLink();




    });


  


