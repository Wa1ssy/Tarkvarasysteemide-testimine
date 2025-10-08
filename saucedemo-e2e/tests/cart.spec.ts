import { test, expect } from '@playwright/test';

const USER = 'standard_user';
const PASS = 'secret_sauce';

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');             // võib ka '/' kasutada, mõlemad ok
  await page.locator('[data-test="username"]').fill(USER);   // kasutame data-test atribuute
  await page.locator('[data-test="password"]').fill(PASS);
  await page.locator('[data-test="login-button"]').click();

  await expect(page).toHaveURL(/inventory\.html/);
  await page.locator('.inventory_list').waitFor();           // oota, kuni tooted renderdatud
});

test('lisa esimene toode korvi ja kontrolli', async ({ page }) => {
  const firstItem = page.locator('.inventory_item').first(); // võta esimene tootekaar
  await expect(firstItem).toBeVisible();

  await firstItem.locator('button:has-text("Add to cart")').click(); // lisa korvi

  const cartBadge = page.locator('#shopping_cart_container .shopping_cart_badge');
  await expect(cartBadge).toHaveText('1');                   // korvi badge = 1

  await page.locator('#shopping_cart_container a').click();  // mine korvi
  await expect(page).toHaveURL(/cart\.html/);

  await expect(page.locator('.cart_item')).toHaveCount(1);   // korvis 1 rida
});
