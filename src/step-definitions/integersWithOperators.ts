import { Given, When, Then, After} from '@wdio/cucumber-framework';
import calculator from '../screens/homeScreen';

After(async () => {
    await calculator.clearMemory(); 
});

Given('I have the calculator app open to test All Operators and Integers Calculation', async () => {
    await calculator.assertAppOpened();
});

When('I enter the calculation {string} containing integers and operators', async (calculationSequence) => {
        await calculator.enterCalculation(calculationSequence);
});

Then('The result should be {string}, a positive integer', async (expectedResult) => {
    const actualResult = await calculator.getOutput();
    await expect(actualResult).toEqual(expectedResult);
});
