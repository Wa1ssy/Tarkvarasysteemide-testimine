import { test, expect } from '@playwright/test';
import { stripDollar, sortedCopyStrings, sortedCopyNumbers } from '../helpers/sorting';

test.describe('Toodete leht - sorteerimine', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', { name: /login/i }).click();
    await expect(page).toHaveURL(/.*inventory.html$/);
  });

  const options = [
    { label: 'Name (A to Z)', desc: false },
    { label: 'Name (Z to A)', desc: true },
    { label: 'Price (low to high)', priceAsc: true },
    { label: 'Price (high to low)', priceAsc: false },
  ];

  for (const opt of options) {
    test(`sorteerimine: ${opt.label}`, async ({ page }) => {
      const select = page.locator('[data-test="product_sort_container"]');
      await select.selectOption({ label: opt.label });

      const itemCards = page.locator('.inventory_item');
      const count = await itemCards.count();

      const names: string[] = [];
      const prices: number[] = [];

      for (let i = 0; i < count; i++) {
        const name = await itemCards.nth(i).locator('.inventory_item_name').innerText();
        const price = await itemCards.nth(i).locator('.inventory_item_price').innerText();
        names.push(name.trim());
        prices.push(stripDollar(price));
      }

      if ('priceAsc' in opt) {
        const expected = sortedCopyNumbers(prices, !opt.priceAsc);
        expect(prices).toEqual(expected);
      } else {
        const expected = sortedCopyStrings(names, opt.desc);
        expect(names).toEqual(expected);
      }
    });
  }
});
