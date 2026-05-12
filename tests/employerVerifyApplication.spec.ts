import { test } from "@playwright/test";
import { readApplicationData } from "../utils/jsonHelper";
import { compareApplicationData } from "../utils/dataComparator";
import ApplyWizardPage from "../pages/ApplyWizardPage";

// test("@regression Employer verifies candidate data", async ({ page }) => {

//   // const applyWizardPage = new ApplyWizardPage(page);

//   // /*
//   // STEP 1 → Load saved JSON
//   // */
//   // const savedData = readApplicationData();
//   /*
//   STEP 2 → Open employer site
//   */
//   await page.goto("https://test.jobtrain.co.uk/voyagecare/Client/Login1");

//   await page.getByTestId('txt-email').fill('nanncy');
//   await page.getByRole('textbox', { name: 'Password' }).fill('Testing@123');
//   await page.getByTestId('btn-login').click();
//   await page.getByTestId('btn-home-jobs').click();

//   await page.getByTestId('div-tbl-row-data-cell-0-CREATEDBYName').getByText('Voyage Care').click();
//   await page.goto('https://test.jobtrain.co.uk/voyagecare/Client/JobsAndTalents/CandidateList/List?id=535');
//   await page.getByTestId('div-tbl-data-row-0').getByRole('link', { name: 'PW Paul Walker' }).click();


//   const employerData = await applyWizardPage.exportApplicationData();

//   /*
//   STEP 4 → Compare
//   */

//   compareApplicationData(savedData, employerData);

// });
test("@regression Employer verifies candidate data for debugginh", async ({ page }) => {

  await page.goto("https://test.jobtrain.co.uk/voyagecare/Client/Login1");

  await page.getByTestId('txt-email').fill('nanncy');
  await page.getByRole('textbox', { name: 'Password' }).fill('Testing@123');
  await page.getByTestId('btn-login').click();
  await page.getByTestId('btn-home-jobs').click();

  await page.getByTestId('div-tbl-row-data-cell-0-CREATEDBYName').getByText('Voyage Care').click();
  await page.goto('https://test.jobtrain.co.uk/voyagecare/Client/JobsAndTalents/CandidateList/List?id=535');
  await page.getByTestId('div-tbl-data-row-0').getByRole('link', { name: 'PW Paul Walker' }).click();


});



//create step by step
//create the client  login script
//extract the json data of candidate then so on and compare with the saved data