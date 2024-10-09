const BasePageFunctions = require("../Pages/BasePageFunctions");
const { CartPageElements } = require("../WebElements/YourCartPageElements");
const { commandsTimeout } = require("../config");


class YourCartPage extends BasePageFunctions {
    constructor(logger, page) {
        super(logger);
        this.page = page;
    }

    /**This function clicks on Checkout button in 'Your Cart' Page */
    async pressCheckout() {
        try {
            await this.page.waitForSelector(CartPageElements.CheckoutBtn, { timeout: commandsTimeout });
            await this.page.click(CartPageElements.CheckoutBtn);
            this.logger.info(`Click on Checkout button`);
        }
        catch (er) {
            this.logger.error(er);
            throw new Error(er);
        }
    }

    /**This function clicks on Continue Shopping button in 'Your Cart' Page */
    async pressContinueShopping() {
        try {
            await this.page.waitForSelector(CartPageElements.ContinueShopping, { timeout: commandsTimeout });
            await this.page.click(CartPageElements.ContinueShopping);
            this.logger.info(`Click on Continue Shopping button`);
        }
        catch (er) {
            this.logger.error(er);
            throw new Error(er);
        }
    }
}

module.exports = YourCartPage;