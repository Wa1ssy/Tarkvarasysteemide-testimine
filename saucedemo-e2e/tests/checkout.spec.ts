import { test, expect } from '@playwright/test';

test.describe('Checkout kuni Overview', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', { name: /login/i }).click();
    await expect(page).toHaveURL(/.*inventory.html$/);

    await page.locator('.inventory_item').nth(0).getByRole('button', { name: /add to cart/i }).click();
    await page.getByRole('link', { name: /shopping cart/i }).click();
    await expect(page).toHaveURL(/.*cart.html$/);
    await page.getByRole('button', { name: /checkout/i }).click();
    await expect(page).toHaveURL(/.*checkout-step-one.html$/);
  });

  test('edukas täitmine viib overview-le ja summad kuvatud', async ({ page }) => {
    await page.getByLabel('First Name').fill('Mati');
    await page.getByLabel('Last Name').fill('Maasikas');
    await page.getByLabel('Zip/Postal Code').fill('12345');
    await page.getByRole('button', { name: /continue/i }).click();

    await expect(page).toHaveURL(/.*checkout-step-two.html$/);
    await expect(page.locator('.summary_subtotal_label')).toBeVisible();
    await expect(page.locator('.summary_tax_label')).toBeVisible();
    await expect(page.locator('.summary_total_label')).toBeVisible();
  });

  test('negatiivsed: jäta üks väli tühjaks → õige veateade', async ({ page }) => {
    await page.getByLabel('Last Name').fill('Maasikas');
    await page.getByLabel('Zip/Postal Code').fill('12345');
    await page.getByRole('button', { name: /continue/i }).click();
    await expect(page.locator('[data-test="error"]')).toHaveText('Error: First Name is required');

    await page.getByLabel('First Name').fill('Mati');
    await page.getByLabel('Last Name').fill('');
    await page.getByLabel('Zip/Postal Code').fill('12345');
    await page.getByRole('button', { name: /continue/i }).click();
    await expect(page.locator('[data-test="error"]')).toHaveText('Error: Last Name is required');

    await page.getByLabel('Last Name').fill('Maasikas');
    await page.getByLabel('Zip/Postal Code').fill('');
    await page.getByRole('button', { name: /continue/i }).click();
    await expect(page.locator('[data-test="error"]')).toHaveText('Error: Postal Code is required');
  });

  test('Cancel tagasiviib eelmisele sammule', async ({ page }) => {
    await page.getByLabel('First Name').fill('Mati');
    await page.getByLabel('Last Name').fill('Maasikas');
    await page.getByLabel('Zip/Postal Code').fill('12345');
    await page.getByRole('button', { name: /continue/i }).click();
    await expect(page).toHaveURL(/.*checkout-step-two.html$/);

    await page.getByRole('button', { name: /cancel/i }).click();
    await expect(page).toHaveURL(/.*checkout-step-one.html$/);
  });
});
