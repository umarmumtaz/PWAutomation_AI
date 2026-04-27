import { expect } from "@playwright/test";
import { Page, BrowserContext } from "@playwright/test";

class LoginPage {
constructor(public page: Page) {}

  async gotToHomePage() {
    await this.page.goto("");
  }

async clickOnSignInButton() {
    await this.page.locator('[data-test="a-sign-in"]').click();
  }

async allowCloseCookies()
 {    await this.page.getByRole('button', { name: 'allow cookies' }).click();
  }


async verifytheJobListingTitle() {
    await expect(this.page.getByTestId('h1-jt-page-title')).toBeVisible();
  }


async enterinValidEmail(email: string) {
    await this.page.getByTestId("txt-email").fill(email);
  }

async enterinValidPassword(password: string) {
    await this.page.getByTestId("txt-password").fill(password);
  } 

async clickOnLoginButton() {
    await this.page.getByRole('button', { name: 'Sign in' }).click();
  }

  async verifyTheErrorMessage() {
    await expect(this.page.getByText("infoInvalid UserName Or")).toBeVisible();
  } 

}
export default LoginPage