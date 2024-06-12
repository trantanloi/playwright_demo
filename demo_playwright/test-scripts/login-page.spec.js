// @ts-check
import locator from '../locator/login-page-locator.json';
import data from '../data/login-page-data.json';
const { test, expect } = require('@playwright/test');
// Get data from yaml file
// const fs = require('fs');
// const yaml = require('js-yaml');
// const yamlData = yaml.load(fs.readFileSync('../data/login-page-data.yaml', 'utf8'));

// console.log(yamlData.url);
// console.log(locator.test_case_a.age);

// Read locator file
test('Login to the system successfully', async ({ page }) => {

  await page.goto(data.test_case_a.url);

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(data.test_case_a.expected_result);
});


// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
