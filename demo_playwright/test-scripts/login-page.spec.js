// @ts-check
import locator from '../locator/automation-exercise-locator.json';
import data from '../data/automation-exercise-data.json';
const { test, expect } = require('@playwright/test');


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}


// https://automationexercise.com/test_cases
test.beforeEach(async ({ page }) => {
  // Step 1 and 2: Open browser and navigate to the website
  await page.goto(data.url);

  // Step 3: Verify that home page is visible successfully
  await expect(page).toHaveTitle(data.title);
});

test('Test Case 1: Register User', async ({ page }) => {
  // Click on 'Signup / Login' button with element as class
  // await page.click(locator['register-user']['login-button-locator-with-class']);

  // Click on "Signup / Login" button with element as text
  // await page.click(locator['register-user']['login-button-locator-with-text']);

  // Steps 4: Click on "Signup / Login" button with element as xpath
  await page.click(locator['signup-page']['login-button-locator-with-xpath']);

  // Step 5: Verify 'New User Signup!' is visible
  const loginLabel = await page.locator(locator['signup-page']['login-label-locator']);
  // console.log(loginLabel);
  await expect(loginLabel).toContainText(data['register-user']['login-label']);

  const signupLabel = await page.locator(locator['signup-page']['signup-label-locator']);
  // console.log(loginLabel);
  await expect(signupLabel).toContainText(data['register-user']['signup-label']);

  // Step 6: Enter name and email address
  // await page.fill(locator['register-user']['signup-name-locator'], "test signup");
  await page.locator(locator['signup-page']['signup-name-locator']).fill(data['register-user'].username);
  // await page.fill(locator['register-user']['signup-email-locator'], "test@yopmail.com")

  // Generator a new email
  const randomNumber = Math.floor(Math.random() * 1000);
  const geneEmail = "testautomation"+randomNumber+"@yopmail.com"
  await page.locator(locator['signup-page']['signup-email-locator']).fill(geneEmail);

  // Step 7: Click 'Signup' button
  await page.click(locator['signup-page']['signup-button-locator']);

  // Step 8: Verify that 'ENTER ACCOUNT INFORMATION' is visible
  const titleSignup = await page.locator(locator['create-account-page']['title-signup-locator']);

  await expect(titleSignup).toContainText(data['register-user']['title-signup']);

  // Step 9: Fill details: Title, Name, Email, Password, Date of birth
  // select Title
  const randomTest = Math.floor(Math.random() * 2);
  if(randomTest==0)
    {
      await page.click(locator['create-account-page']['mr-radio-locator']);
    }
  else
    {
      await page.click(locator['create-account-page']['mrs-radio-locator']);
    }
  
  // Verify username
  const getName = await page.locator(locator['create-account-page']['name-field-locator']);
  await expect(getName).toHaveValue(data['register-user'].username);
  
  // Verify email
  const getEmail = await page.locator(locator['create-account-page']['email-field-locator']);
  await expect(getEmail).toHaveValue(geneEmail);
  
  // Input password
  await page.locator(locator['create-account-page']['password-field-locator']).fill(data['register-user'].password);

  // select date of birth
  const randomDate = String(Math.floor(Math.random() * 31));
  await page.selectOption(locator['create-account-page']['day-field-locator'],randomDate);

  const randomMonth = String(Math.floor(Math.random() * 12));
  await page.selectOption(locator['create-account-page']['month-field-locator'], randomMonth);

  let randomYear = String(getRandomInt(1990, 2021));
  await page.selectOption(locator['create-account-page']['years-field-locator'] , randomYear);

  // Step 10: Select checkbox 'Sign up for our newsletter!'
  await page.locator(locator['create-account-page']['newsletter-checkbox-locator']).check();

  // Step 11: Select checkbox 'Receive special offers from our partners!' 
  await page.locator(locator['create-account-page']['receive-checkbox-locator']).check();

  // Step 12: Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
  await page.locator(locator['create-account-page']['first-name-field-locator']).fill(data['address-info']['first-name']);

  await page.locator(locator['create-account-page']['last-name-field-locator']).fill(data['address-info']['last-name']);

  await page.locator(locator['create-account-page']['company-field-locator']).fill(data['address-info'].company);

  await page.locator(locator['create-account-page']['address-field-locator']).fill(data['address-info'].address);

  await page.locator(locator['create-account-page']['address2-field-locator']).fill(data['address-info']['address-bonus']);

  const countryList = ['India', 'United States', 'Canada', 'Australia', 'Israel', 'New Zeland', 'Singapore'];
  const randomCountry = countryList[Math.floor(Math.random() * countryList.length)];
  
  await page.selectOption(locator['create-account-page']['country-combobox-locator'], randomCountry);
  
  await page.locator(locator['create-account-page']['state-field-locator']).fill(data['address-info'].state);

  await page.locator(locator['create-account-page']['city-field-locator']).fill(data['address-info'].city);

  await page.locator(locator['create-account-page']['zipcode-field-locator']).fill(data['address-info'].zipcode);

  await page.locator(locator['create-account-page']['mobile-number-field-locator']).fill(data['address-info']['mobile-numher']);

  // Step 13: Click 'Create Account button'
  await page.locator(locator['create-account-page']['create-account-btn-locator']).click();

  // Step 14: Verify that 'ACCOUNT CREATED!' is visible
  const createdLabel = await page.locator(locator['account-created']['created-label-locator']);

  await expect(createdLabel).toContainText(data['account-created']['created-label']);

  // Step 15: Click 'Continue' button 
  await page.locator(locator['account-created']['continue-btn-locator']).click();

  // Step 16: Verify that 'Logged in as username' is visible 
  const getLoggedName = await page.locator(locator['login-successfully']['logged-label-locator']);
  await expect(getLoggedName).toHaveText(" Logged in as " + data['register-user'].username);
    
  // Step 17: Click 'Delete Account' button
  await page.locator(locator['login-successfully']['delete-account-locator']).click();

  // Step 18:  Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
  const getDeletedLabel = await page.locator(locator['account-deleted']['deleted-label-locator']);
  await expect(getDeletedLabel).toContainText(data['account-deleted']['deleted-label']);

  await page.locator(locator['account-deleted']['continue-btn-locator']).click();

  const getSignupLabel = await page.locator(locator['signup-page']['signup-login-label-locator']);
  await expect(getSignupLabel).toHaveText(data['register-user']['signup-login-label']);
});

