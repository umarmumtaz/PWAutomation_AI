import {test, expect, BrowserContext, chromium} from '@playwright/test';
import LoginPage from '../pages/LoginPage.ts';
import { prepareHome } from '../utils/commonFiles.ts';

test.describe('Run all the test cases', () => {
  //test before all pre conditions of the TCs
test.beforeEach(async ({ page }) => {
  await prepareHome(page);
  });
//login scenarios - regression/smoke
  test("@smoke login with valid email, and password", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.clickOnSignInButton();
    await loginPage.enterinValidEmail("nanncykevin@gmail.com")
    await loginPage.enterinValidPassword("Testing@123");
    await loginPage.clickOnLoginButton();
    await page.waitForLoadState('networkidle');
    await page.getByRole('button', { name: 'Close' })
    await loginPage.verifytheJobListingTitle();
    await page.locator('#loggedInCandidateName').click();
    await page.getByRole('link', { name: 'Logout' }).click();
  });

  test("@regression login with invalid email, and password", async ({ page }) => {
    const loginPage = new LoginPage(page); //class passing the current page object
    await loginPage.clickOnSignInButton();
    await loginPage.enterinValidEmail("dddddd@gmail.com");
    await loginPage.enterinValidPassword("dddd@123");
    await loginPage.clickOnLoginButton();
    await page.waitForLoadState('networkidle');
    await loginPage.verifyTheErrorMessage();
  });
 
  test("@regression login without email, and password", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.clickOnSignInButton();
    await loginPage.clickOnLoginButton();
    await loginPage.verifyTheErrorMessage();
  });

  // New tests added for extended behaviors
  test("@regression should not submit when email format is invalid", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.clickOnSignInButton();
    await loginPage.enterinValidEmail("invalid-email-format");
    await loginPage.enterinValidPassword("somePassword1!");
    await loginPage.clickOnLoginButton();
   await loginPage.verifyTheErrorMessage();;
  });


  test("@regression should show error when only email is provided", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.clickOnSignInButton();
    await loginPage.enterinValidEmail("someone@example.com");
    await loginPage.clickOnLoginButton();
    await loginPage.verifyTheErrorMessage();
  });

  test("@regression should show error when only password is provided", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.clickOnSignInButton();
    await loginPage.enterinValidPassword("PasswordOnly1!");
    await loginPage.clickOnLoginButton();
    await loginPage.verifyTheErrorMessage();
  });

});
test.afterEach(async ({ page }) => {
  // Runs after each test
  await page.close();
});
