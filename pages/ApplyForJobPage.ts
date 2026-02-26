// pages/JobApplyPage.ts
import { Page, expect } from '@playwright/test';

export default class JobApplyPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('');
  }

  async clickonJob() {
    await this.page.getByTestId('a-job-detail-manual tester').click();
  }
async   applyJob() {
    await this.page.getByTestId('a-btn-top-job-apply-button').click();
}
async   verifyTheJobTitle() {
    await expect(this.page.getByText('You are applying for the role')).toBeVisible();
    await expect(this.page.getByText('manual tester')).toBeVisible();
  }
}await page.getByTestId('a-btn-top-job-apply-button').click();