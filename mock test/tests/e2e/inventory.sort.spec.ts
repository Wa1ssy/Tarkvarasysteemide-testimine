import { test, expect } from '@playwright/test';

test.describe('DataTables sorting', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://datatables.net/examples/basic_init/zero_configuration.html');
    await expect(page.locator('#example')).toBeVisible();
  });

  test('sorts by Name ascending and descending', async ({ page }) => {
    const nameCells = '#example tbody tr td:nth-child(1)';
    const nameHeader = '#example thead th:nth-child(1)';

    await page.click(nameHeader);
    const asc = await page.locator(nameCells).allTextContents();
    const expectedAsc = [...asc].sort((a, b) => a.localeCompare(b));
    expect(asc).toEqual(expectedAsc);

    await page.click(nameHeader);
    const desc = await page.locator(nameCells).allTextContents();
    expect(desc).toEqual([...expectedAsc].reverse());
  });

  test('sorts by Age ascending and descending', async ({ page }) => {
    const ageCells = '#example tbody tr td:nth-child(4)';
    const ageHeader = '#example thead th:nth-child(4)';

    await page.click(ageHeader);
    const ascAges = (await page.locator(ageCells).allTextContents()).map(Number);
    const expectedAsc = [...ascAges].sort((a, b) => a - b);
    expect(ascAges).toEqual(expectedAsc);

    await page.click(ageHeader);
    const descAges = (await page.locator(ageCells).allTextContents()).map(Number);
    expect(descAges).toEqual([...expectedAsc].reverse());
  });
});
