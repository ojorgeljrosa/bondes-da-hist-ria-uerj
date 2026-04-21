---
name: playwright-testing
description: Use when writing, debugging, or maintaining Playwright E2E, component, or API tests. Triggers on tasks involving test generation, locator strategies, Page Object Model, authentication flows, network mocking, visual regression, flaky test fixing, CI/CD setup, or Playwright configuration. Combines E2E testing patterns with best practices for 50+ testing scenarios.
license: MIT
metadata:
  version: "1.0.0"
  category: testing
---

# Playwright Testing

Comprehensive guide for writing, debugging, and maintaining Playwright tests across E2E, component, API, and visual regression scenarios.

## When to Use

- Writing new Playwright E2E, component, or API tests
- Debugging failing tests, flaky behavior, or timeouts
- Setting up Playwright project configuration and CI/CD
- Implementing Page Object Model or custom fixtures
- Network mocking, authentication flows, visual regression
- Fixing selector issues, race conditions, or state leaks

**Related Skill:** For ad-hoc browser automation with Python Playwright scripts (element discovery, screenshot capture, server lifecycle management), use the **webapp-testing** skill.

---

## Quick Start

```bash
npm init playwright@latest    # Initialize project
npx playwright install         # Install browsers
npx playwright test            # Run tests
npx playwright test --ui       # Interactive UI mode
npx playwright show-report     # View HTML report
npx playwright show-trace      # View trace viewer
```

---

## Configuration

```typescript
// playwright.config.ts
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',

  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },

  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox',  use: { ...devices['Desktop Firefox'] } },
    { name: 'webkit',   use: { ...devices['Desktop Safari'] } },
    { name: 'Mobile Chrome', use: { ...devices['Pixel 5'] } },
  ],

  webServer: {
    command: 'npm run start',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
  },
});
```

---

## Test Structure

```typescript
import { test, expect } from '@playwright/test';

test.describe('User authentication', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/login');
    await page.waitForLoadState('networkidle');
  });

  test('should login successfully', async ({ page }) => {
    await page.getByLabel('Username').fill('testuser');
    await page.getByLabel('Password').fill('password123');
    await page.getByRole('button', { name: 'Log in' }).click();

    await expect(page).toHaveURL('/dashboard');
    await expect(page.locator('.welcome-message')).toContainText('Welcome');
  });

  test('should show error for invalid credentials', async ({ page }) => {
    await page.getByLabel('Username').fill('invalid');
    await page.getByLabel('Password').fill('wrong');
    await page.getByRole('button', { name: 'Log in' }).click();

    await expect(page.locator('.error-message')).toBeVisible();
  });
});
```

---

## Locator Strategies (Priority Order)

### 1. Role-Based (BEST — accessible, stable)

```typescript
await page.getByRole('button', { name: 'Submit' }).click();
await page.getByRole('textbox', { name: 'Email' }).fill('user@example.com');
await page.getByRole('checkbox', { name: 'Subscribe' }).check();
await page.getByRole('link', { name: 'Learn more' }).click();
await page.getByRole('listitem').filter({ hasText: 'Product 1' })
  .getByRole('button', { name: 'Add to cart' }).click();
```

### 2. Label / Placeholder / Text (Good)

```typescript
await page.getByLabel('Password').fill('secret123');
await page.getByPlaceholder('Search...').fill('query');
await page.getByText('Welcome back').click();
```

### 3. Test ID (Good for dynamic content)

```typescript
await page.getByTestId('user-profile').click();
```

### 4. CSS / XPath (Use sparingly)

```typescript
await page.locator('button.primary').click();
await page.locator('#user-menu').click();
await page.locator('xpath=//button[contains(text(), "Submit")]').click();
```

---

## Assertions

### Common Assertions

```typescript
// Visibility
await expect(page.locator('.header')).toBeVisible();
await expect(page.locator('.loading')).toBeHidden();

// Text
await expect(page.locator('h1')).toHaveText('Dashboard');
await expect(page.locator('.message')).toContainText('welcome');

// State
await expect(page.locator('button')).toBeEnabled();
await expect(page.locator('button')).toBeDisabled();
await expect(page.locator('input')).toHaveValue('test@example.com');
await expect(page.locator('input')).toHaveAttribute('type', 'email');

// Count
await expect(page.locator('.item')).toHaveCount(5);

// URL and title
await expect(page).toHaveURL(/dashboard$/);
await expect(page).toHaveTitle('Dashboard - My App');
```

### Soft Assertions (continue on failure)

```typescript
await expect.soft(page.locator('.title')).toHaveText('Welcome');
await expect.soft(page.locator('.subtitle')).toBeVisible();
```

### Polling Assertions

```typescript
await expect(async () => {
  const response = await page.request.get('/api/status');
  expect(response.ok()).toBeTruthy();
}).toPass({ timeout: 10000, intervals: [1000, 2000, 5000] });
```

---

## Page Object Model

```typescript
// pages/LoginPage.ts
import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly submitButton: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.getByLabel('Username');
    this.passwordInput = page.getByLabel('Password');
    this.submitButton = page.getByRole('button', { name: 'Log in' });
    this.errorMessage = page.locator('.error-message');
  }

  async goto() { await this.page.goto('/login'); }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.submitButton.click();
  }

  async expectError(message: string) {
    await expect(this.errorMessage).toHaveText(message);
  }
}
```

```typescript
// tests/auth.spec.ts
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('successful login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('testuser', 'password123');
  await expect(page).toHaveURL('/dashboard');
});
```

---

## Authentication Patterns

### Storage State (Recommended)

```typescript
// auth.setup.ts
import { test as setup } from '@playwright/test';
const authFile = 'playwright/.auth/user.json';

setup('authenticate', async ({ page }) => {
  await page.goto('/login');
  await page.getByLabel('Username').fill('testuser');
  await page.getByLabel('Password').fill('password123');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.waitForURL('/dashboard');
  await page.context().storageState({ path: authFile });
});
```

```typescript
// playwright.config.ts — use saved auth state
projects: [
  { name: 'setup', testMatch: /.*\.setup\.ts/ },
  {
    name: 'chromium',
    use: { ...devices['Desktop Chrome'], storageState: 'playwright/.auth/user.json' },
    dependencies: ['setup'],
  },
]
```

### Multiple User Roles (Fixtures)

```typescript
// fixtures/auth.ts
import { test as base } from '@playwright/test';

export const test = base.extend({
  adminPage: async ({ browser }, use) => {
    const ctx = await browser.newContext({ storageState: 'playwright/.auth/admin.json' });
    const page = await ctx.newPage();
    await use(page);
    await ctx.close();
  },
  userPage: async ({ browser }, use) => {
    const ctx = await browser.newContext({ storageState: 'playwright/.auth/user.json' });
    const page = await ctx.newPage();
    await use(page);
    await ctx.close();
  },
});

// tests/permissions.spec.ts
import { test } from '../fixtures/auth';

test('admin can access admin panel', async ({ adminPage }) => {
  await adminPage.goto('/admin');
  await expect(adminPage.locator('.admin-panel')).toBeVisible();
});

test('user cannot access admin panel', async ({ userPage }) => {
  await userPage.goto('/admin');
  await expect(userPage.locator('.access-denied')).toBeVisible();
});
```

---

## Network Control

### Mocking API Responses

```typescript
test('mock API responses', async ({ page }) => {
  await page.route('**/api/users', route => {
    route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({ users: [{ id: 1, name: 'John Doe' }] }),
    });
  });

  await page.goto('/users');
  await expect(page.locator('.user-list')).toContainText('John Doe');
});
```

### Simulating Network Errors

```typescript
test('handle network errors', async ({ page }) => {
  await page.route('**/api/data', route => route.abort('failed'));
  await page.goto('/data');
  await expect(page.locator('.error-message')).toBeVisible();
});
```

### Intercepting and Modifying Requests

```typescript
test('modify request headers', async ({ page }) => {
  await page.route('**/api/**', route => {
    const headers = route.request().headers();
    route.continue({ headers: { ...headers, 'X-Custom-Header': 'test' } });
  });
});
```

### Waiting for API Responses

```typescript
test('wait for API response', async ({ page }) => {
  const responsePromise = page.waitForResponse('**/api/users');
  await page.click('button#load-users');
  const response = await responsePromise;
  expect(response.status()).toBe(200);
  const data = await response.json();
  expect(data.users).toHaveLength(10);
});
```

---

## Custom Fixtures

```typescript
// fixtures/todos.ts
import { test as base } from '@playwright/test';

type TodoFixtures = {
  todoPage: TodoPage;
  createTodo: (title: string) => Promise<void>;
};

export const test = base.extend<TodoFixtures>({
  todoPage: async ({ page }, use) => {
    const todoPage = new TodoPage(page);
    await todoPage.goto();
    await use(todoPage);
  },
  createTodo: async ({ page }, use) => {
    await use(async (title) => {
      await page.fill('.new-todo', title);
      await page.press('.new-todo', 'Enter');
    });
  },
});
```

---

## Visual Regression

```typescript
test('visual regression', async ({ page }) => {
  await page.goto('/dashboard');

  // Full page
  await expect(page).toHaveScreenshot('dashboard.png', { maxDiffPixels: 100 });

  // Element
  await expect(page.locator('.widget')).toHaveScreenshot('widget.png');

  // Mask dynamic elements
  await expect(page).toHaveScreenshot('comparison.png', {
    mask: [page.locator('.timestamp'), page.locator('.avatar')],
    maxDiffPixelRatio: 0.05,
  });
});
```

---

## Data-Driven Tests

```typescript
const testCases = [
  { input: 'hello', expected: 'HELLO' },
  { input: 'World', expected: 'WORLD' },
  { input: '123', expected: '123' },
];

for (const { input, expected } of testCases) {
  test(`transforms "${input}" to "${expected}"`, async ({ page }) => {
    await page.goto('/transform');
    await page.fill('input', input);
    await page.click('button');
    await expect(page.locator('.result')).toHaveText(expected);
  });
}
```

---

## Test Tags and Filtering

```typescript
test('smoke test', { tag: '@smoke' }, async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle('Home');
});

test('critical test', { tag: ['@regression', '@critical'] }, async ({ page }) => {
  // Complex test
});

// Run: npx playwright test --grep @smoke
// Run: npx playwright test --grep-invert @slow
```

---

## CI/CD Integration

### GitHub Actions

```yaml
# .github/workflows/playwright.yml
name: Playwright Tests
on:
  push: { branches: [main] }
  pull_request: { branches: [main] }
jobs:
  test:
    timeout-minutes: 60
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20 }
      - run: npm ci
      - run: npx playwright install --with-deps
      - run: npx playwright test
      - uses: actions/upload-artifact@v4
        if: always()
        with:
          name: playwright-report
          path: playwright-report/
          retention-days: 30
```

---

## Debugging

| Tool | Command | When to Use |
|------|---------|-------------|
| **UI Mode** | `npx playwright test --ui` | Interactive step-through debugging |
| **Debug one test** | `npx playwright test --debug login.spec.ts` | Single test investigation |
| **Slow motion** | `npx playwright test --headed --slow-mo=1000` | Visual inspection |
| **Trace Viewer** | `npx playwright show-trace trace.zip` | Post-failure analysis |
| **Console capture** | `page.on('console', msg => ...)` | JS errors in browser |
| **HTML Report** | `npx playwright show-report` | Test results overview |

### Test Validation Loop

After writing or modifying tests:

1. Run: `npx playwright test --reporter=list`
2. If tests fail → review trace (`npx playwright show-trace`), fix locators/waits/assertions
3. Re-run until all pass
4. For critical tests: `npx playwright test --repeat-each=5`

---

## Fixing Flaky Tests

| Symptom | Likely Cause | Fix |
|---------|-------------|-----|
| Element not found | Selector too brittle, timing | Use role-based locators, rely on auto-wait |
| Timeout | Page not fully loaded | `waitUntil: 'networkidle'` or explicit `waitForSelector` |
| Fails only in parallel | Shared state | Unique test data (`user-${Date.now()}@test.com`) |
| State leak between tests | Missing fixture isolation | Use fixtures, avoid shared global state |
| Race condition | Async operations not awaited | `waitForResponse`, `waitForURL` before assertions |
| Works locally, fails in CI | Slower environment, no `reuseExistingServer` | Increase timeout, check `webServer` config |

---

## Best Practices (5 Rules)

1. **Use stable locators** — Role-based > Label > TestID > CSS. Never use brittle selectors like `button.btn-primary.submit-btn`.
2. **Leverage auto-waiting** — Playwright auto-waits before actions. Never use `waitForTimeout` unless absolutely necessary.
3. **Use Page Object Model** — Reusable, maintainable. Don't duplicate selectors across test files.
4. **Parallel-safe tests** — Each test must be independent. Use unique data to avoid conflicts.
5. **Handle flakiness properly** — Fix root cause (locator, wait, assertion). Don't just add retries.

---

## Activity-Based Reference Guide

Use this table to find the right reference for your task:

| What are you doing? | Key Patterns |
|---------------------|-------------|
| **Writing E2E test** | Test structure, role-based locators, assertions |
| **Writing component test** | Mount component, test rendering/interactions |
| **Writing API test** | `page.request.get/post`, mock responses, assert status |
| **Using POM** | Page class pattern above |
| **Setting up auth** | Storage state pattern above |
| **Mocking API** | `page.route` with `fulfill`/`abort` |
| **OAuth/SSO** | Storage state + multi-context for popup flows |
| **File upload** | `page.setInputFiles('input[type="file"]', 'path/to/file')` |
| **Drag and drop** | `page.dragAndDrop('#source', '#target')` |
| **Forms/validation** | `getByRole('textbox')`, `getByRole('button')`, assert error messages |
| **Visual regression** | `toHaveScreenshot` with masking/thresholds |
| **Multi-user test** | Custom fixtures with separate browser contexts per user |
| **WebSocket/real-time** | `page.waitForEvent('websocket')`, intercept frames |
| **iFrames** | `frame = page.frameLocator('iframe')`, then locate inside |
| **Mobile/responsive** | Device emulation in config, viewport testing |
| **Electron app** | `electron.launch()` in config, test main process |
| **Accessibility** | Role-based locators, `@playwright/experimental-accessibility` |
| **Test is failing** | Check locators → check waits → check assertions → use trace viewer |
| **Fixing flaky tests** | See Flaky Tests table above |
| **CI/CD setup** | GitHub Actions template above, sharding for large suites |
| **Performance optimization** | Parallel execution, sharding, avoid redundant navigation |
| **Test annotations** | `{ tag: '@smoke' }`, `test.skip()`, `test.fixme()`, `test.slow()` |
| **Data factories** | Custom fixtures that create test data per test |
