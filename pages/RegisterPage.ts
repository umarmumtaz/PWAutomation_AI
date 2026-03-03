
/*
import { expect, Page } from "@playwright/test";

class RegisterPage {
  randomEmail: string;
  constructor(public page: Page) {
    this.randomEmail = generateRandomEmail();  // Generate a random email on page load
  }

  // Click on "Have Not Account" button
  async clickOnHaveNotAccountButton() {
    await this.page.locator('.register__link.mb-25').click();  // Await async action
  }

  // Verify the title of the first registration page
  async verifyTheRegister1PageTitle() {
    const RegisterPage1Title = await this.page.locator('.register__title.text-primary.h3').textContent();
    await expect(RegisterPage1Title).toContain("Now, let's  get started");
    console.log(RegisterPage1Title);
  }

  // Fill in the valid registration credentials (email)
  async validRegisterCredentials() {
    // Wait for the email field to be visible and then fill it
    await this.page.locator('#UserName').waitFor({ state: 'visible' });
    await this.page.locator('#UserName').fill(this.randomEmail);  // Use generated email
  }

  // Verify if the Continue button is disabled (optional)
  async verifyTheDisabledContinueButton() {
    const continueButton = await this.page.getByRole('button', { name: 'Continue' });
    const isDisabled = await continueButton.isDisabled();
    console.log(`Continue button is disabled: ${isDisabled}`);
  }
}

// Function to generate a random email
function generateRandomEmail() {
  const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let randomEmail = '';
  for (let i = 0; i < 10; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);  // Generate random index
    randomEmail += characters.charAt(randomIndex);
  }
  return `${randomEmail}@gmail.com`;  // Return a randomly generated email
}

export { RegisterPage };


*/



import { expect, Page } from "@playwright/test";

class RegisterPage {

  randomEmail: string;

  constructor(public page: Page) {
    this.randomEmail = generateRandomEmail();
  }

  async clickOnHaveNotAccountButton() {
    await this.page.locator('.register__link.mb-25').click();
  }

  async verifyTheRegister1PageTitle() {
    await expect(
      this.page.locator('.register__title.text-primary.h3')
    ).toContainText("Now, let's  get started");
  }


  async validRegisterCredentials() {
    // Wait for the email field to be visible and then fill it
    await this.page.locator('#UserName').waitFor({ state: 'visible' });
    await this.page.locator('#UserName').fill(this.randomEmail);  // Use generated email
  }




  async completeRegistration() {

    const password = "Testing@123";

    // Email
    await this.page.locator('#UserName').fill(this.randomEmail);

    // Space trigger (keep your workaround)
    await this.page.locator('#UserName').press('Space');
    await this.page.locator('#UserName').press('Backspace');

    // Password
    await this.page.getByTestId("txt-create-a-password").fill(password);
    await this.page.getByTestId("txt-create-a-password").press('Space');
    await this.page.getByTestId("txt-create-a-password").press('Backspace');

    await this.page.locator('#register').click();

    // Second Page
    await expect(
      this.page.locator('.register__title.text-primary.h3')
    ).toHaveText('A couple more things');

    await this.page.getByPlaceholder('First name').fill('Paul');
    await this.page.getByPlaceholder('Last name').fill('Walker');

    await this.page.getByPlaceholder('Last name').press('Space');
    await this.page.getByPlaceholder('Last name').press('Backspace');

    await this.page.getByPlaceholder('Mobile number').fill('00441172345678');

    await this.page.getByText('I agree to the').click();

    await this.page.locator('#continue').click();

    return {
      email: this.randomEmail,
      password
    };
  }
}

function generateRandomEmail() {
  const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let randomEmail = '';
  for (let i = 0; i < 10; i++) {
    randomEmail += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return `${randomEmail}@gmail.com`;
}

export { RegisterPage };