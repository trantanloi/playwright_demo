// @ts-check
import data from '../locator/login-page-locator.json';
const { test, expect } = require('@playwright/test');
const fs = require('fs');
const yaml = require('js-yaml');

// Read data file
const yamlData = yaml.load(fs.readFileSync('../data/login-page-data.yaml', 'utf8'))
console.log(yamlData.url);
console.log(data.id);

// Read locator file

test('Login to the system successfully', async ({ page }) => {

  await page.goto(yamlData.url);

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(yamlData.expected_result);
});


// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
