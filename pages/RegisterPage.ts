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




//chat GPT solution
import { expect, Page } from "@playwright/test";

export class RegisterPage {

  constructor(private page: Page) {}

  generateRandomEmail(): string {
    const random = Math.random().toString(36).substring(2, 10);
    return `test_${random}@gmail.com`;
  }

  async navigateToRegister() {
    await this.page.locator('[data-test="a-sign-in"]').click();
    await this.page.locator('.register__link.mb-25').click();

    await expect(
      this.page.locator('.register__title.text-primary.h3')
    ).toContainText("Now, let's  get started");
  }

  // 🔥 Special workaround for your app validation issue
  private async triggerValidation(locator: string) {
    await this.page.locator(locator).press('Space');
    await this.page.locator(locator).press('Backspace');
  }

  async completeRegistration() {

    const email = this.generateRandomEmail();
    const password = "Testing@123";

    await this.page.locator('#UserName').fill(email);
    await this.triggerValidation('#UserName');

    await this.page.getByTestId("txt-create-a-password").fill(password);
    await this.triggerValidation('[data-testid="txt-create-a-password"]');

    await this.page.locator('#register').click();

    await expect(
      this.page.locator('.register__title.text-primary.h3')
    ).toHaveText('A couple more things');

    await this.page.getByPlaceholder('First name').fill('Paul1');
    await this.page.getByPlaceholder('Last name').fill('Walker1');
    await this.triggerValidation('[placeholder="Last name"]');

    await this.page.getByPlaceholder('Mobile number').fill('00441172345678');

    await expect(
      this.page.getByText('I agree to the terms and')
    ).toBeVisible();

    await this.page.getByText('I agree to the').click();

    await this.page.locator('#continue').click();

    return { email, password };
  }
}