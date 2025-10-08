import { test as base, expect } from '@playwright/test';
export const test = base.extend<{
  login: (username?: string, password?: string) => Promise<void>;
}>({
  login: async ({ page }, use) => {
    await use(async (username = 'standard_user', password = 'secret_sauce') => {
      await page.goto('/');
      await page.getByPlaceholder('Username').fill(username);
      await page.getByPlaceholder('Password').fill(password);
      await page.getByRole('button', { name: /login/i }).click();
      if (username === 'standard_user' && password === 'secret_sauce') {
        await expect(page).toHaveURL(/.*inventory.html$/);
      }
    });
  },
});

export { expect } from '@playwright/test';
