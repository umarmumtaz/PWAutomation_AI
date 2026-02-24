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
