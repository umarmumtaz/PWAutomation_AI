import { Page } from '@playwright/test';
export async function prepareHome(page: Page) {
  await page.goto('');
 // await page.getByRole('button', { name: 'allow cookies' }).click();


}