// global-setup.ts
import { chromium, FullConfig } from '@playwright/test';

async function globalSetup(config: FullConfig) {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto('', {
    waitUntil: 'domcontentloaded',
  });

  // TODO: Perform login or registration steps here
  // Example:
  // await page.click('text=Sign In');
  // await page.fill('#email', 'test@example.com');
  // await page.fill('#password', 'Password123');
  // await page.click('button[type=submit]');

  // Save authentication state
  await page.context().storageState({ path: 'storage/state.json' });

  await browser.close();
}

export default globalSetup;