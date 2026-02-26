import { test, expect } from '@playwright/test';
import JobApplyPage from '../pages/ApplyForJobPage';
import  {prepareHome}  from '../utils/commonFiles.ts';
test.describe('About you tab tests', () => { 
 test.beforeEach(async ({ page }) => {
   await prepareHome(page);
 });
test('@smoke Apply for a job', async ({ page }) => {
  const jobPage = new JobApplyPage(page);
  await jobPage.clickonJob();
  await jobPage.applyJob();
  await jobPage.verifyTheJobTitle();   
  await page.waitForLoadState('networkidle');
});
  test.afterAll(async ({ page }) => {
 await page.getByRole('button', { name: 'Save and exit' }).click();
await page.getByRole('button', { name: 'Confirm' }).click();

  })

})