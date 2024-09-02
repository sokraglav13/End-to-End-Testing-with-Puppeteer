const BasePageFunctions = require("../Pages/BasePageFunctions");
const { CartPageElements } = require("../WebElements/YourCartPageElements");


class YourCartPage extends BasePageFunctions {
    constructor(logger, page) {
        super(logger)
        this.page = page;
    }

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