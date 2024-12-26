class HomeScreen {

    //Selectors

    get homeScreen() {
        return $('//XCUIElementTypeStaticText[@name="AC"]');
    } 

    Button(buttonValue: string) {
        return $(`//XCUIElementTypeStaticText[@name="${buttonValue}"] `);
    }

    get outputBox() {
        return $('//XCUIElementTypeOther/XCUIElementTypeStaticText[2]');
    } 

    get upperOutputBox() {
        return $('//XCUIElementTypeOther/XCUIElementTypeStaticText[1]');
    } 

    get clearButton() {
        return $('//XCUIElementTypeStaticText[@name="⌦"]');
    } 

    get clearMemoryButton() {
        return $('//XCUIElementTypeStaticText[@name="AC"]');
    } 

    get invalidInput(){
        return $('//XCUIElementTypeStaticText[@name="Invalid Input"]');
    }
    
    //Helpers

    async clickButton(value: string){
        const buttonSelector = await this.Button(value);
        await buttonSelector.click();
    }

    async enterCalculation(calculationSequence: string){
        for (const char of calculationSequence.split('')) {
            await this.clickButton(char);
        }
    }

    async getOutput(){
        const outputBoxSelector = await this.outputBox;
        const output = await outputBoxSelector.getAttribute('value');
        return output;
    }

    async getUpperBoxOutput(){
        const outputBoxSelector = await this.upperOutputBox;
        const output = await outputBoxSelector.getAttribute('value');
        return output;
    }

    async clearResult(){
        const clearButtonSelector = await this.clearButton;
        await clearButtonSelector.click();
    }

    async clearMemory(){
        const clearMemorySelector = await this.clearMemoryButton;
        await clearMemorySelector.click();
    }

    //Asserts

    async assertAppOpened(){
        browser.pause(3000);
        const homeScreenSelector = await this.homeScreen;
        await expect(homeScreenSelector).toBeDisplayed();
    }

    async assertInvalidInputErrorDisplayed(){
        const errorSelector = await this.invalidInput;
        await expect(errorSelector).toBeDisplayed();
    }

}

export default new HomeScreen();