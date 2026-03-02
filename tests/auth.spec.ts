import { test } from "@playwright/test";
import { RegisterPage } from "../pages/RegisterPage";
import { saveUserData } from "../utils/userUtils";

test('Register account', async ({ page }) => {

  await page.goto('');

  const register = new RegisterPage(page);

  await register.navigateToRegister();
  const credentials = await register.completeRegistration();

  await page.context().storageState({ path: 'storage/state.json' });

  saveUserData(credentials.email, credentials.password);
});