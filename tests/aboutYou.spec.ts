import { test } from '@playwright/test';
import  AboutYouPage from '../pages/AboutYouPage'; 



test.describe   ('About you tab tests', () => { 
 test.beforeEach(async ({ page }) => {
   await page.goto('Application/AboutYou?Jobid=20323&section=1&Stage=0&edit=1&QuestionId=0/')      
 });   
test('@smoke Fill about you tab data', async ({ page }) => {
  const aboutYou = new AboutYouPage(page);
  await aboutYou.fillPersonalDetails();

});


test('@smoke Upload CV and CL', async ({ page }) => {
  const aboutYou = new AboutYouPage(page);
  await aboutYou.uploadCV();

});

test('@smoke Add or update employment details', async ({ page }) => {
  const aboutYou = new AboutYouPage(page);
  await aboutYou.updateEmployment();
await aboutYou.deleteEmployment();
});

test('@smoke Add or update education details', async ({ page }) => {
  const aboutYou = new AboutYouPage(page);
  await aboutYou.addEducation();
  await aboutYou.deleteEducation();
  await aboutYou.addotherEducation();
  await page.waitForLoadState('networkidle');
});

// apply after each save and execute



});














