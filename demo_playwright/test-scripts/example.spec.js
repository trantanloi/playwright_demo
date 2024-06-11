// @ts-check
const { test, expect } = require('@playwright/test');

const fs = require('fs');
const yaml = require('js-yaml');
const yamlData = yaml.load(fs.readFileSync('../data/config.yaml', 'utf8'))
// console.log(yamlData.url);

test('Login to the system successfully', async ({ page }) => {

  await page.goto(yamlData.url);

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(yamlData.expected_result);
});


test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
