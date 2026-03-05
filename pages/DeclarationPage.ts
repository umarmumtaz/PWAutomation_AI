import{ Page} from '@playwright/test';

export class DeclarationPage {
  constructor(private page: Page) {}

  async clickAgreeButton() {

  await this.page.getByText('Yes, I agree!').click();
  }

async enterEmailLineManager(){
await this.page.getByText('It is company policy that you').click();
  await this.page.getByRole('textbox', { name: 'Please enter the email' }).click();
  await this.page.getByRole('textbox', { name: 'Please enter the email' }).fill('nanncykevin@gmail.com')
  await this.page.getByRole('textbox', { name: 'Please enter the email' }).press('Space');

}


  async clickSubmitButton() {
     await this.page.getByRole('button', { name: 'Submit application' }).click();
  }

  async clickCandidateHomeLink() {
    await this.page.getByRole('link', { name: 'Candidate Home' }).click();
   
  }
async accountRecoveryPopup(){
if (await this.page.getByRole('button', { name: 'Close' }).isVisible()) {
  await this.page.getByRole('button', { name: 'Close' }).click();
}


}


}