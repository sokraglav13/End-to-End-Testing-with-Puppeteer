const BasePageFunctions = require("../Pages/BasePageFunctions");
const { CheckoutPageElements } = require("../WebElements/CheckoutPageElements");
const { getClearValue } = require("../Utils/Utils");
const { commandsTimeout } = require("../config");

class CheckoutPage extends BasePageFunctions {
    constructor(logger, page) {
        super(logger);
        this.page = page;
    }

    /** This function fills the required information for the form in the 'Your Information' Page
     * 
     * @param {string} firstname 
     * @param {string} lastname 
     * @param {string} postalcode 
     */
    async fillInformationForm(firstname, lastname, postalcode) {
        try {
            await this.page.waitForSelector(CheckoutPageElements.YourInformation.FirstnameField, { timeout: commandsTimeout });
            await this.clearField(CheckoutPageElements.YourInformation.FirstnameField);
            await this.clearField(CheckoutPageElements.YourInformation.LastnameField);
            await this.clearField(CheckoutPageElements.YourInformation.ZipcodeField);
            await this.page.type(CheckoutPageElements.YourInformation.FirstnameField, firstname);
            await this.page.type(CheckoutPageElements.YourInformation.LastnameField, lastname);
            await this.page.type(CheckoutPageElements.YourInformation.ZipcodeField, postalcode);
            this.logger.info(`Fill the information form with Firstname, Lastname and Postal Code`);
        }
        catch (er) {
            this.logger.error(er);
            throw new Error(er);
        }
    }

    /** This function clicks on Continue button */
    async pressContinue() {
        try {
            await this.page.waitForSelector(CheckoutPageElements.ContinueBtn, { timeout: commandsTimeout });
            await this.page.click(CheckoutPageElements.ContinueBtn);
            this.logger.info(`Click on Continue button`);
        }
        catch (er) {
            this.logger.error(er);
            throw new Error(er);
        }
    }

    /** This function clicks on Cancel button */
    async pressCancel() {
        try {
            await this.page.waitForSelector(CheckoutPageElements.Cancel, { timeout: commandsTimeout });
            await this.page.click(CheckoutPageElements.Cancel);
            this.logger.info(`Click on Cancel button`);
        }
        catch (er) {
            this.logger.error(er);
            throw new Error(er);
        }
    }

    /** This function returns the error message in 'Your Information' Page
     * @returns {string} */
    async getErrorMessage() {
        try {
            this.logger.info(`Get the error message`);
            await this.page.waitForSelector(CheckoutPageElements.YourInformation.ErrorMessage, { timeout: commandsTimeout });
            return await this.page.$eval(CheckoutPageElements.YourInformation.ErrorMessage, el => el.textContent);
        }
        catch (er) {
            this.logger.error(er);
            throw new Error(er);
        }
    }

    /** This function returns the items total price
     * @returns {string} */
    async getItemsTotal() {
        try {
            this.logger.info("Get items total price");
            await this.page.waitForSelector(CheckoutPageElements.Overview.PriceTotal, { timeout: commandsTimeout });
            const fullText = await this.page.$eval(CheckoutPageElements.Overview.PriceTotal, el => el.textContent);
            const clearValue = getClearValue(fullText);
            return clearValue;
        }
        catch (er) {
            this.logger.error(er);
            throw new Error(er);
        }
    }

    /** This function returns the tax number
     * @returns {string} */
    async getItemsTax() {
        try {
            this.logger.info("Get tax price");
            await this.page.waitForSelector(CheckoutPageElements.Overview.TaxPrice, { timeout: commandsTimeout });
            const fullText = await this.page.$eval(CheckoutPageElements.Overview.TaxPrice, el => el.textContent);
            const clearValue = getClearValue(fullText);
            return clearValue;
        }
        catch (er) {
            this.logger.error(er);
            throw new Error(er);
        }
    }

    /** This function returns the total price includes tax
     * @returns {string} */
    async getItemsTotalPriceIncludeTax() {
        try {
            this.logger.info("Get items total price includes tax");
            await this.page.waitForSelector(CheckoutPageElements.Overview.TotalPriceIncludesTax, { timeout: commandsTimeout });
            const fullText = await this.page.$eval(CheckoutPageElements.Overview.TotalPriceIncludesTax, el => el.textContent);
            const clearValue = getClearValue(fullText);
            return clearValue;
        }
        catch (er) {
            this.logger.error(er);
            throw new Error(er);
        }
    }

    /** This function returns the product title according to the input numbers which specifies the order 
     * @returns {string} 
     * @param {number} num 
     * @example Products = "Backpack", "BikeLight"
     * getProductTitle(1) will returns the "Backpack" */
    async getProductTitle(num) {
        try {
            this.logger.info("Get product title from Checkout Overview");
            await this.page.waitForSelector(CheckoutPageElements.Overview.CartItemTitle(num), { timeout: commandsTimeout });
            return await this.page.$eval(CheckoutPageElements.Overview.CartItemTitle(num), el => el.textContent);
        }
        catch (er) {
            this.logger.error(er);
            throw new Error(er);
        }
    }

    /** This function returns the product description according to the input numbers which specifies the order 
     * @returns {string} 
     * @param {number} num 
     * @example Products = "Description_1", "Description_2"
     * getProductDescription(1) will returns the "Description_1" */
    async getProductDescription(num) {
        try {
            this.logger.info("Get product description from Checkout Overview");
            await this.page.waitForSelector(CheckoutPageElements.Overview.CartItemDescription(num), { timeout: commandsTimeout });
            return await this.page.$eval(CheckoutPageElements.Overview.CartItemDescription(num), el => el.textContent);
        }
        catch (er) {
            this.logger.error(er);
            throw new Error(er);
        }
    }

    /** This function returns the product price according to the input numbers which specifies the order 
     * @returns {string} 
     * @param {number} num 
     * @example Products = "29.99", "79.99"
     * getProductPrice(1) will returns the "29.99" */
    async getProductPrice(num) {
        try {
            this.logger.info("Get product price from Checkout Overview");
            await this.page.waitForSelector(CheckoutPageElements.Overview.CartItemTitle(num), { timeout: commandsTimeout });
            return await this.page.$eval(CheckoutPageElements.Overview.CartItemTitle(num), el => el.textContent);
        }
        catch (er) {
            this.logger.error(er);
            throw new Error(er);
        }
    }

    /** This function clicks on Finish button */
    async pressFinish() {
        try {
            await this.page.waitForSelector(CheckoutPageElements.Finish, { timeout: commandsTimeout });
            await this.page.click(CheckoutPageElements.Finish);
            this.logger.info(`Click on Finish button`);
        }
        catch (er) {
            this.logger.error(er);
            throw new Error(er);
        }
    }

    /**
     * This function returns the title from order completion 
     * @returns {string}
     */
    async getCompleteTitle() {
        try {
            this.logger.info(`Get the title from the order complition`);
            await this.page.waitForSelector(CheckoutPageElements.Complete.Title, { timeout: commandsTimeout });
            return await this.page.$eval(CheckoutPageElements.Complete.Title, el => el.textContent);
        }
        catch (er) {
            this.logger.error(er);
            throw new Error(er);
        }
    }

    /** This function returns the description from order completion 
     * @returns {string}
     */
    async getCompleteDescription() {
        try {
            this.logger.info(`Get the description from the order complition`);
            await this.page.waitForSelector(CheckoutPageElements.Complete.Description, { timeout: commandsTimeout });
            return await this.page.$eval(CheckoutPageElements.Complete.Description, el => el.textContent);
        }
        catch (er) {
            this.logger.error(er);
            throw new Error(er);
        }
    }

    /** This function clicks on Back Home button */
    async pressBackHome() {
        try {
            await this.page.waitForSelector(CheckoutPageElements.Complete.BackHomeBtn, { timeout: commandsTimeout });
            await this.page.click(CheckoutPageElements.Complete.BackHomeBtn);
            this.logger.info(`Click on Back Home button`);
        }
        catch (er) {
            this.logger.error(er);
            throw new Error(er);
        }
    }
}

module.exports = CheckoutPage;