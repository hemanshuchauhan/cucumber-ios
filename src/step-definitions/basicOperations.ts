import { Given, When, Then, After} from '@wdio/cucumber-framework';
import calculator from '../screens/homeScreen';

After(async () => {
    await calculator.clearMemory(); 
});

Given('I have the calculator app open', async () => {
    await calculator.assertAppOpened();
});

When('I enter {string} {string} {string} and press {string}', async (number1, operator1, number2, operator2) => {
    await calculator.clickButton(number1);
    await calculator.clickButton(operator1);
    await calculator.clickButton(number2);
    await calculator.clickButton(operator2);
});

// For positive scenario
Then('The result should be {string}', async (expectedResult) => {
    const actualResult = await calculator.getOutput();
    await expect(actualResult).toEqual(expectedResult);
    await calculator.clearMemory();
});

// For negative scenario
Then('The result should not be {string}', async (expectedResult) => {
    const actualResult = await calculator.getOutput();
    await expect(actualResult).not.toEqual(expectedResult);
    await calculator.clearMemory();
});
