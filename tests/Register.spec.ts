import { test, expect } from "@playwright/test";
import  LoginPage  from "../pages/LoginPage.ts";
import { RegisterPage } from "../pages/RegisterPage";
import { saveUserData } from "../utils/userUtils.ts";
import { prepareHome } from '../utils/commonFiles.ts';



test.describe ('Run all the test cases - Register', () => {
  //test before all pre conditions of the TCs
test.beforeEach(async ({ page }) => {
  await prepareHome(page);
});
//register scenarions - regression
test("@regression Register an Account", async ({ page }) => {
  const registerFromLoginPage = new LoginPage(page); 
  await registerFromLoginPage.clickOnSignInButton();

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
  
  await page.locator('#loggedInCandidateName').click();
  await page.getByRole('link', { name: 'Logout' }).click();

  await page.context().storageState({ path: 'storage/state.json' });
  saveUserData(emailForRegistration, passwordForRegistration);

});



test("@regression should not enable register when password is too weak", async ({ page }) => {
  const login = new LoginPage(page);
  await login.clickOnSignInButton();
  const registerPage = new RegisterPage(page);
  await registerPage.clickOnHaveNotAccountButton();
  await registerPage.verifyTheRegister1PageTitle();
  await page.getByTestId("txt-create-a-password").fill("123");
  const registerBtn = page.locator('#register');
  await expect(registerBtn).toBeDisabled();
});

test("@regression should show validation when email is missing", async ({ page }) => {
  const login = new LoginPage(page);
  await login.clickOnSignInButton();
 const registerPage = new RegisterPage(page);
  await registerPage.clickOnHaveNotAccountButton();
  await page.getByTestId("txt-create-a-password").fill("Testing@123");
  const registerBtn = page.locator('#register');
  await expect(registerBtn).toBeDisabled();
});


});