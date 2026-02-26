import { test, expect } from "@playwright/test";
import { SupportingInfoPage } from "../pages/SupportingInfoPage";



test.describe('Supporting information tab tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('Application/SupportingInformation?Jobid=20323&section=1&Stage=0&edit=1&QuestionId=0/');
  });

  test('@smoke Fill supporting information tab data', async ({ page }) => {     
 const supportingInfo = new AboutYouPage(page);
 await supportingInfo.fillSupportingInfo();
 await page.waitForLoadState('networkidle');
 await page.supportingInfo.additionalInfo();

  });

  test.afterAll(async ({ page }) => {
 await page.getByRole('button', { name: 'Save and exit' }).click();
await page.getByRole('button', { name: 'Confirm' }).click();

  })
});



