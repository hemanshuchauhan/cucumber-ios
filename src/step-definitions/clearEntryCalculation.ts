import { Given, When, Then, After} from '@wdio/cucumber-framework';
import calculator from '../screens/homeScreen';

After(async () => {
    await calculator.clearMemory(); 
});

Given('I have the calculator open to test Continuous Operations with Clear Entry', async () => {
    await calculator.assertAppOpened();
});

When('I enter {string}', async (calculationSequence) => {
        await calculator.enterCalculation(calculationSequence);
});

When('I hit the clear entry button', async () => {
    await calculator.clearResult();
});

Then('The input should revert to {string}, removing the last entry', async (expectedResult) => {
    const actualResult = await calculator.getUpperBoxOutput();
    await expect(actualResult).toEqual(expectedResult);
});

When('I hit the clear entry button again', async () => {
    await calculator.clearResult();
});

When('I hit the equals button {string}', async (button) => {
    await calculator.clickButton(button);
});

Then('The result should show {string}', async (expectedResult) => {
    const actualResult = await calculator.getOutput();
    await expect(actualResult).toEqual(expectedResult);
});
