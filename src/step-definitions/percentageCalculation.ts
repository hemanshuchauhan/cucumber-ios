import { Given, When, Then, After} from '@wdio/cucumber-framework';
import calculator from '../screens/homeScreen';

After(async () => {
    await calculator.clearMemory(); 
});

Given('I have the calculator app open to test percentage calculation', async () => {
    await calculator.assertAppOpened();
});

When('I enter the calculation {string} with percentage in it', async (calculationSequence) => {
        await calculator.enterCalculation(calculationSequence);
});

Then('The result should be decimal value {string}', async (expectedResult) => {
    const actualResult = await calculator.getOutput();
    await expect(actualResult).toEqual(expectedResult);
});

When('I do subtraction as {string}', async (calculationSequence) => {
    await calculator.enterCalculation(calculationSequence);
});

Then('The result should be {string}, a decimal value', async (expectedResult) => {
    const actualResult = await calculator.getOutput();
    await expect(actualResult).toEqual(expectedResult);
});
