import {test, expect } from "@playwright/test";
import ApplyWizardPage from "../pages/ApplyWizardPage";


test.describe.serial('Apply for job flow tests', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('Application/JobApply?Jobid=20323&section=1&Stage=0&edit=1&QuestionId=0/');
    });
    test  ('@smoke Apply for job flow', async ({ page }) => {
        const applyWizardPage = new ApplyWizardPage(page);
        await applyWizardPage.aboutYouPage.fillPersonalDetails();
        await applyWizardPage.aboutYouPage.uploadCV();
        await applyWizardPage.aboutYouPage.updateEmployment();
        await applyWizardPage.aboutYouPage.deleteEmployment();
        await applyWizardPage.aboutYouPage.addEducation();
        await applyWizardPage.aboutYouPage.deleteEducation();
        await applyWizardPage.aboutYouPage.addotherEducation();
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

});
