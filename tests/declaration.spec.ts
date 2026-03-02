import{test, expect} from '@playwright/test';
import { DeclarationPage } from '../pages/DeclarationPage';

test.describe('Declaration tab tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('Application/Declaration?Jobid=20323&section=6&Stage=0&QuestionId=0/');
  });   
test('@smoke Fill declaration tab data', async ({ page }) => {
 const declaration = new DeclarationPage(page);
 await declaration.clickAgreeButton();
 await declaration.clickSubmitButton(); 
await page.waitForLoadState('networkidle');
await declaration.clickCandidateHomeLink();

await page.getByTestId('jt-body-content-container-myjobs-index').getByText('close').click();
})
})