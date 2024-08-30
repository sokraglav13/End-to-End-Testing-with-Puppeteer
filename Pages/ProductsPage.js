const BasePageFunctions = require("./BasePageFunctions")
const { LoginPageElements, MainPageElements, CartPageElements, CheckoutPageElements } = require("../WebElements/webElements");


class ProductsPage extends BasePageFunctions {
    constructor(logger, page) {
        super(logger)
        this.page = page;
    }

    async addProductToCart(itemName = 0) {
        try {
            await this.pressKeyboardButton('Enter')
            await this.page.waitForSelector(MainPageElements.Backpack.AddToCartBtn, { timeout: commandsTimeout });
            await this.page.click(MainPageElements.Backpack.AddToCartBtn);
            this.logger.info("Click on Add to Cart button for Backpack Item");
        }
        catch (er) {
            this.logger.error(er);
            throw new Error(er);
        }

    }

    async removeProductFromCart(itemName) {
        try {
            await this.page.waitForSelector(MainPageElements.BikeLightRemoveBtn, { timeout: commandsTimeout });
            await this.page.click(MainPageElements.BikeLightRemoveBtn);
            this.logger.info("Click on Remove button for Bike Light Item");
        }
        catch (er) {
            this.logger.error(er);
            throw new Error(er);
        }
    }

}

module.exports = ProductsPage;