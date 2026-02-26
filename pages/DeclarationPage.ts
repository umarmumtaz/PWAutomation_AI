import{ Page} from '@playwright/test';

export class DeclarationPage {
  constructor(private page: Page) {}

  async clickAgreeButton() {

  await this.page.getByText('Yes, I agree!').click();
  }

  async clickSubmitButton() {
      await this.page.getByRole('button', { name: 'Submit application' }).click();
  }

  async clickCandidateHomeLink() {
    await this.page.getByRole('link', { name: 'Candidate Home' }).click();
  }
}