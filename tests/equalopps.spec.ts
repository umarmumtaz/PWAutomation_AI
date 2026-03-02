import { test, expect } from '@playwright/test';
import {EqualoppsPage} from '../pages/EqualoppsPage';

test.describe ('Equal opps tab tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('Application/EqualOpportunities?Jobid=20323&section=5&Stage=0&QuestionId=0/');
  });   
test('@smoke Fill equal opps tab data', async ({ page }) => {
  const equalopps = new EqualoppsPage(page);
  await equalopps.fillEqualopps();
  await page.waitForLoadState('networkidle');
  
});


test.afterAll(async ({ page }) => {
 await page.getByRole('button', { name: 'Save and exit' }).click();
await page.getByRole('button', { name: 'Confirm' }).click();

});
});
