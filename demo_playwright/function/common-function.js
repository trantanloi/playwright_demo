const { test, expect } = require('@playwright/test');


// Function random an integer value
export function getRandomYear(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Function randome interge value
export function getRandomValue(number){
    return Math.floor(Math.random() * number); 
}

// This function to validation data
export function verifyDataContainText(locator, data){
    return expect(locator).toContainText(data);
}
