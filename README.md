# Playwright Automation 

## Project Overview
This is a **Playwright automation testing framework** built with TypeScript. It contains browser automation tests that validate web application behavior across Chromium, Firefox, and WebKit browsers.

**Key Tech Stack:**
- `@playwright/test` (v1.57.0) - End-to-end testing framework
- TypeScript for test scripts
- GitHub Actions for CI/CD automation
-https://github.com/umarmumtaz/PWAutomation_AI.git

## Architecture & Project Structure

```
PWAutomationAI/
├── tests/
│   ├── Login.spec.ts            # Login test specifications
│   ├── Register.spec.ts         # Registration test specifications
├── pages/
│   ├── LoginPage.ts             # Login Page Object Model
│   ├── RegisterPage.ts          # Register Page Object Model
├── utils/                       # Utility functions and helpers
├── storage/
│   └── state.json               # Stored authentication session/state
├── playwright.config.ts         # Central test configuration
├── package.json                 # Dependencies and scripts
├── .github/
│   └── workflows/
│       └── playwright.yml       # CI/CD automation for GitHub Actions
├── playwright-report/           # HTML test report (generated)
└── test-results/               # Generated test artifacts (tracing, reports)
    └── .playwright-artifacts-* # Trace recordings for debugging
```

**Critical File Purposes:**
- [playwright.config.ts](../playwright.config.ts) - Controls test parallelization, browser projects, reporters, retry logic, and storageState
- [tests/Login.spec.ts](tests/Login.spec.ts) - Login workflow test scenarios
- [tests/Register.spec.ts](tests/Register.spec.ts) - Registration workflow test scenarios
- [pages/LoginPage.ts](pages/LoginPage.ts) - LoginPage Page Object with login methods
- [pages/RegisterPage.ts](pages/RegisterPage.ts) - RegisterPage Page Object with registration methods
- [storage/state.json](storage/state.json) - Persistent authentication state for session reuse

## Test Organization & Naming Conventions

- **Test file naming:** Files must use `*.spec.ts` extension for discovery
- **Test discovery:** Directory `./tests` is configured in `playwright.config.ts` as `testDir`
- **Test structure:** Each test is defined with `test('description', async ({ page }) => { ... })`
- **Fixtures:** Tests receive Playwright fixtures like `{ page }` for automatic browser context management
- **Test tags:** Use `@smoke` tag prefix for smoke test classification (e.g., `test('@smoke Register an Account...')`)
- **Test hooks:** Use `test.beforeEach()` for setup common to all tests (e.g., navigate to base URL)

**Example pattern from [Register.spec.ts](tests/Register.spec.ts):**
```typescript
test.beforeEach(async ({ page }) => {
    await page.goto('https://test.jobtrain.co.uk/ybscareers/', { waitUntil: 'domcontentloaded', timeout: 65000 });
});

test("@smoke Register an Account Process final", async ({ page }) => {
  const registerFromLoginPage = new LoginPage(page);
  await registerFromLoginPage.clickOnSignInButton();
  // ... rest of test ...
});
```

**Page Object Pattern (LoginPage.ts example):**
```typescript
import { expect } from "@playwright/test";
import { Page } from "@playwright/test";

class LoginPage {
  constructor(public page: Page) {}
  
  async clickOnSignInButton() {
    await this.page.locator('[data-test="a-sign-in"]').click();
  }

  async enterValidEmail(email: string) {
    await this.page.getByTestId("txt-email").fill(email);
  }

  async enterValidPassword(password: string) {
    await this.page.getByTestId("txt-password").fill(password);
  }
}
export default LoginPage
```

**RegisterPage with State Pattern (RegisterPage.ts example):**
```typescript
class RegisterPage {
  randomEmail: string;
  
  constructor(public page: Page) {
    this.randomEmail = generateRandomEmail();  // Store state for later reuse
  }

  async validRegisterCredentials() {
    await this.page.locator('#UserName').fill(this.randomEmail);
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
```

## Critical Workflows & Commands

**First-Time Setup:**
```bash
# Install dependencies (required before any tests)
npm install

# Install Playwright browsers and system dependencies
npx playwright install --with-deps
```

**Running Tests Locally:**
```bash
# Run all tests in parallel (default mode)
npx playwright test

# Run tests in debug mode with UI
npx playwright test --debug

# Run tests for specific browser only
npx playwright test --project chromium

# Show HTML test report
npx playwright show-report
```

**CI/CD Workflow (GitHub Actions):**
The [.github/workflows/playwright.yml](.github/workflows/playwright.yml) automatically:
1. Triggers on push/PR to `main` or `master` branches
2. Installs dependencies via `npm ci`
3. Installs Playwright browsers with system dependencies via `npx playwright install --with-deps`
4. Runs tests with retry (2 retries) on CI with single worker
5. Uploads HTML test reports as artifacts

## Configuration Patterns & Key Settings

**From [playwright.config.ts](playwright.config.ts):**

| Setting | Value | Purpose |
|---------|-------|---------|
| `testDir` | `./tests` | Auto-discovery of test files |
| `fullyParallel` | `true` | Run tests concurrently for speed |6
| `forbidOnly` | `!!process.env.CI` | Fail if `test.only` committed to CI |
| `retries` | 0 local, 2 on CI | Reduce flakiness in CI |
| `workers` | undefined locally, 1 on CI | Local: use CPU count; CI: serial for isolation |
| `reporter` | `'html'` | Generate HTML report in `playwright-report/` |
| `trace` | `'on-first-retry'` | Record browser traces for failed tests |
| Browser Projects | chromium, firefox, webkit | Tests run on 3 browser engines by default |
| `slowMo` | 2000ms | Slows down actions for visibility during debugging |
| `screenshot` | "on" | Captures screenshots on test failure |
| `headless` | true | Run without visible browser window |
| Viewport | 1280x720 | Standard desktop viewport for chromium project |

**Environment Variables:**
- `CI=true` when running in GitHub Actions - triggers different retry/worker behavior

## Integration & Extension Points

**Adding New Tests:**
1. Create `tests/newFeature.spec.ts` with `*.spec.ts` naming
2. Use Page Objects from `pages/` folder for UI interactions
3. Import and instantiate page objects: `const page = new LoginPage(page)`
4. Tests auto-discovered and run on next `npx playwright test`

**Session Management with storageState:**
- After successful registration/login, save state: `await page.context().storageState({ path: 'storage/state.json' })`
- Reuse authenticated session in config: `use: { storageState: 'storage/state.json' }`
- Stored in [storage/state.json](storage/state.json) - contains cookies and localStorage for authentication

**Extending Configuration:**
- Set `storageState` in [playwright.config.ts](playwright.config.ts) to reuse authenticated sessions across tests
- Add base URL for shorter `page.goto()` calls via `use: { baseURL: 'https://test.jobtrain.co.uk/ybscareers/' }`
- Modify browser projects to test mobile viewports or branded browsers

**Common Patterns:**
- Use `page.getByRole()` or `page.getByTestId()` for locators (preferred over CSS selectors)
- Chain expectations: `await expect(locator).toBeVisible()`, `toHaveText()`, `toHaveURL()`
- Page Object Model (POM) for reusable UI interactions across tests
- Test isolation handled automatically - new browser context per test
- Use `page.waitForLoadState('networkidle')` for async operations

**Page Object Implementation Details:**
- Initialize page objects by passing `page` fixture to constructor: `new LoginPage(page)`
- Store generated/random data as class properties for reuse (e.g., `this.randomEmail` in [RegisterPage.ts](pages/RegisterPage.ts))
- Each page object method should be a single user action (`clickOnSignInButton()`, `enterValidEmail()`)
- Use both `getByTestId()` for data-test attributes and `getByRole()` for standard elements
- Mix of locators acceptable: `page.locator('.css-class')` for CSS, `page.getByPlaceholder()` for inputs with placeholder text
- Helper functions like `generateRandomEmail()` can be placed in same file as page object (see [RegisterPage.ts](pages/RegisterPage.ts))

**Locator Strategy Hierarchy (prefer top to bottom):**
1. `page.getByTestId('test-id')` - Best: uses explicit data-test attributes
2. `page.getByRole('button', { name: 'Label' })` - Good: semantic and accessible
3. `page.getByPlaceholder('text')` - Good: for input fields with placeholder text
4. `page.locator('#id')` or `page.locator('.class')` - Last resort: direct CSS/ID selectors (less maintainable)

## Debugging & Troubleshooting

**When Tests Fail:**
- Check `playwright-report/` HTML report for screenshots/videos
- Review traces in `test-results/.playwright-artifacts-*/traces` using `npx playwright show-trace`
- Run with `--debug` flag for interactive step-through
- Verify [storage/state.json](storage/state.json) has valid authentication cookies

**storageState Issues:**
- If storageState loading fails: Ensure [storage/state.json](storage/state.json) exists and is valid
- File must be created by running registration/login test first
- Clear old state files if sessions expire and need re-registration
- Verify cookies are not expired: Check `expires` field in state.json

**CI-Specific Issues:**
- Failures on CI but passing locally? Check `forbidOnly` - remove `.only` from committed tests
- System dependencies missing? CI installs via `npx playwright install --with-deps`
- storageState file missing in CI? Ensure state.json is committed or generated before tests run


--------------------
Excellent 👌 Umar — now we’re going into **framework architecture level thinking**.

You asked:

> “What exactly do I need to enhance to support JSON export & comparison?”

Let’s break this down clearly and practically based on **your multi-tab job application flow**.

---

# 🎯 Current Situation (Your Framework Today)

You already have:

```
ApplyWizardPage
 ├── AboutYouPage
 ├── SupportingInfoPage
 ├── EqualOppsPage
 ├── DeclarationPage
```

Each page has:

```ts
fillPersonalDetails()
fillSupportingInfo()
fillEqualOpps()
```

That is GOOD.

But right now your framework can:

✔ Fill data
❌ It cannot extract data
❌ It cannot snapshot state
❌ It cannot compare two applications

That’s what we need to enhance.

---

# 🧠 What “Enhance Slightly” Actually Means

We will:

1. Add **getter methods** to each tab
2. Add one **aggregator method** in ApplyWizardPage
3. Add optional **normalizer**
4. Use deep comparison in test

That’s it.

No rewrite.
No structure change.
No breaking your existing fill logic.

---

# 🏗 Step 1 — Add Getter Methods Per Tab

Right now you have:

```ts
async fillPersonalDetails(data)
```

Now we ADD:

```ts
async getPersonalDetails()
```

---

## ✅ Example — AboutYouPage Enhancement

### BEFORE (you already have)

```ts
async fillPersonalDetails(data) {
  await this.page.getByPlaceholder('First name').fill(data.firstName);
  await this.page.getByPlaceholder('Last name').fill(data.lastName);
  await this.page.getByPlaceholder('Mobile number').fill(data.mobile);
}
```

---

### AFTER (enhanced version)

```ts
async getPersonalDetails() {
  return {
    firstName: await this.page.getByPlaceholder('First name').inputValue(),
    lastName: await this.page.getByPlaceholder('Last name').inputValue(),
    mobile: await this.page.getByPlaceholder('Mobile number').inputValue()
  };
}
```

Now this tab supports:

✔ Filling
✔ Reading

This is the key enhancement.

---

# 🏗 Step 2 — Add Getter for Modals (Education / Employment)

For example:

```ts
async getEducationEntries() {

  const rows = this.page.locator('.education-row');
  const count = await rows.count();

  const educationList = [];

  for (let i = 0; i < count; i++) {
    educationList.push({
      institute: await rows.nth(i).locator('.institute').textContent(),
      degree: await rows.nth(i).locator('.degree').textContent()
    });
  }

  return educationList;
}
```

Now you support arrays in JSON.

---

# 🏗 Step 3 — Add Aggregator in ApplyWizardPage

Now we unify all tabs.

Inside `ApplyWizardPage` add:

```ts
async exportApplicationData() {
  return {
    aboutYou: await this.aboutYouPage.getPersonalDetails(),
    supportingInfo: await this.supportingInfoPage.getSupportingInfo(),
    equalOpps: await this.equaloppsPage.getEqualOpps(),
    education: await this.aboutYouPage.getEducationEntries()
  };
}
```

This creates a full structured object like:

```json
{
  "aboutYou": {
    "firstName": "Paul",
    "lastName": "Walker",
    "mobile": "00441172345678"
  },
  "supportingInfo": {
    "statement": "I am motivated"
  },
  "education": [
    {
      "institute": "Oxford",
      "degree": "BSc"
    }
  ]
}
```

Now your wizard can produce JSON.

---

# 🏗 Step 4 — Compare in Test

Now your copy test becomes:

```ts
// Apply Job A
await fillJobWithData(jobApplicationData);

const jobAData = await wizard.exportApplicationData();

// Apply Job B
await wizard.JobApplyPage.startNewApplication();
await wizard.JobApplyPage.clickCopyFromPrevious();

const jobBCopiedData = await wizard.exportApplicationData();

// Compare
expect(jobBCopiedData).toEqual(jobAData);
```

That’s it.

---

# 🧠 Why This Is Powerful

Now your framework can:

✔ Validate copy functionality
✔ Validate edit functionality
✔ Validate data persistence
✔ Compare UI vs API
✔ Snapshot regression state

Without changing your structure.

---

# ⚠ Step 5 — Add Normalizer (Very Important)

UI data may contain:

* Extra spaces
* Different date formats
* Uppercase/lowercase differences

So add:

```ts
function normalize(data) {
  return {
    ...data,
    aboutYou: {
      ...data.aboutYou,
      firstName: data.aboutYou.firstName.trim(),
      lastName: data.aboutYou.lastName.trim()
    }
  };
}
```

Then:

```ts
expect(
  normalize(jobBCopiedData)
).toEqual(
  normalize(jobAData)
);
```

Now tests are stable.

---

# 🏆 What Did We Actually Enhance?

We added:

| Feature              | Change            |
| -------------------- | ----------------- |
| Read UI values       | Getter methods    |
| Full wizard snapshot | Aggregator method |
| Stability            | Normalizer        |
| Copy validation      | Deep comparison   |

Your structure remains untouched.

---

# 🚀 Architecture Pattern You Just Added

You moved from:

> Basic POM Automation

To:

> State-Based Validation Framework

That’s advanced.

---

# 🧩 Bonus — Compare UI vs API

Later you can do:

```ts
const uiData = await wizard.exportApplicationData();
const apiData = await getApplicationFromAPI();

expect(normalize(uiData)).toEqual(normalize(apiData));
```

Now you validate frontend-backend integrity.

Enterprise level.

---

# 🎯 Final Answer

You don’t change your multi-tab structure.

You only:

✔ Add getter methods
✔ Add one export method
✔ Compare structured objects

Minimal change. Maximum power.

---

If you want, next I can show:

* How to build reusable deepCompare utility
* How to ignore dynamic fields automatically
* How to snapshot entire wizard in one command
* How to store JSON files per job ID

You're thinking like a test architect now 👌
