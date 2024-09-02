const BasePageFunctions = require("../Pages/BasePageFunctions");
const { CheckoutPageElements } = require("../WebElements/CheckoutPageElements");

class CheckoutPage extends BasePageFunctions {
    constructor(logger, page) {
        super(logger)
        this.page = page;
    }

    async fillInformationForm(firstname, lastname, postalcode) {
        try {
            await this.page.waitForSelector(CheckoutPageElements.YourInformation.FirstnameField, { timeout: commandsTimeout });
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

    async getItemsTotal() {
        try {
            this.logger.info("Get items total price");
            await this.page.waitForSelector(CheckoutPageElements.PriceTotal, { timeout: commandsTimeout });
            const fullText = await this.page.$eval(CheckoutPageElements.PriceTotal, el => el.textContent);
            const clearValue = getClearValue(fullText);
            return clearValue
        }
        catch (er) {
            this.logger.error(er);
            throw new Error(er);
        }
    }

    async getItemsTax() {
        try {
            this.logger.info("Get tax price");
            await this.page.waitForSelector(CheckoutPageElements.TaxPrice, { timeout: commandsTimeout });
            const fullText = await this.page.$eval(CheckoutPageElements.TaxPrice, el => el.textContent);
            const clearValue = getClearValue(fullText);
            return clearValue
        }
        catch (er) {
            this.logger.error(er);
            throw new Error(er);
        }
    }

    async getItemsTotalPriceIncludeTax() {
        try {
            this.logger.info("Get items total price includes tax");
            await this.page.waitForSelector(CheckoutPageElements.TotalPriceIncludesTax, { timeout: commandsTimeout });
            const fullText = await this.page.$eval(CheckoutPageElements.TotalPriceIncludesTax, el => el.textContent);
            const clearValue = getClearValue(fullText);
            return clearValue
        }
        catch (er) {
            this.logger.error(er);
            throw new Error(er);
        }
    }

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

    async pressFinish() {
        try {
            await this.page.waitForSelector(CheckoutPageElements.Finish, { timeout: commandsTimeout });
            await this.page.click(CheckoutPageElements.Finish);
            this.logger.info(`Click on Cancel button`);
        }
        catch (er) {
            this.logger.error(er);
            throw new Error(er);
        }
    }

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

module.exports = CheckoutPage