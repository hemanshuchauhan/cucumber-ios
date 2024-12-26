import { Given, When, Then, After} from '@wdio/cucumber-framework';
import calculator from '../screens/homeScreen';

After(async () => {
    await calculator.clearMemory(); 
});

Given('I have the calculator app open to test Error Scenarios are Caught', async () => {
    await calculator.assertAppOpened();
});

When('I enter the calculation {string}', async (calculationSequence) => {
        await calculator.enterCalculation(calculationSequence);
});

When('I hit the clear entry button to remove the last number', async () => {
    await calculator.clearResult();
});

Then('The input should be showing {string}', async (expectedResult) => {
    const actualResult = await calculator.getUpperBoxOutput();
    await expect(actualResult).toEqual(expectedResult);
});

When('I hit the equals button {string} to get the solution', async (button) => {
    await calculator.clickButton(button);
});

Then('The error pop-up is shown', async () => {
    await calculator.assertInvalidInputErrorDisplayed();
});
