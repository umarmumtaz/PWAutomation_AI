import { Page } from '@playwright/test';
import path from 'path';
//upload resume file from the repo to the application
export function getTestFile(fileName: string) {
  // Resolves file path inside repo - uses project root/docs folder
  return path.resolve(process.cwd(), 'docs', fileName);
}





// Date picker helper
export async function selectDate(page: Page, year: string, month: string, day: string) {
  await page.getByPlaceholder('DD/MM/YYYY').click();
  while (true) {
    const currentYear = await page.locator(".ui-datepicker-year").textContent();
    const currentMonth = await page.locator(".ui-datepicker-month").textContent();
    if (currentYear?.trim() === year && currentMonth?.trim() === month) {
      await page.locator(`.ui-datepicker-calendar td[aria-label="Date ${day} ${month} ${year}"]`).click();
      break;
    } else {
      await page.click(".ui-datepicker-next");
    }
  }
}
