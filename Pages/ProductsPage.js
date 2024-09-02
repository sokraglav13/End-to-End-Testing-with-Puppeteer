const BasePageFunctions = require("./BasePageFunctions");
const { MainPageElements } = require("../WebElements/ProductsPageElements");
const { GeneralElements } = require("../WebElements/GeneralElements");
const { findProductButton, sortBy } = require("../Utils/Utils");
const { commandsTimeout } = require("../config")

class ProductsPage extends BasePageFunctions {
    constructor(logger, page) {
        super(logger)
        this.page = page;
    }

    /**This function clicks on 'Add to Cart' button according to the input value
     * @example 
     * Valid Product Names: 
     * "Backpack",
     * "BikeLight",
     * "BoltTshirt",
     * "FleeceJacket",
     * "Onesie",
     * "TestTshirt",
     */
    async addProductToCart(productName) {
        try {
            const productElements = findProductButton(productName);
            await this.page.waitForSelector(productElements.AddToCartBtn, { timeout: commandsTimeout });
            await this.page.click(productElements.AddToCartBtn);
            this.logger.info(`Click on Add to Cart button for ${productName} Item`);
        }
        catch (er) {
            this.logger.error(er);
            throw new Error(er);
        }

    }

    /**This function clicks on 'Remove' button according to the input value
     * @example 
     * Valid Product Names: 
     * "Backpack",
     * "BikeLight",
     * "BoltTshirt",
     * "FleeceJacket",
     * "Onesie",
     * "TestTshirt",
     */
    async removeProductFromCart(productName) {
        try {
            const productElements = findProductButton(productName);
            await this.page.waitForSelector(productElements.RemoveFromCartBtn, { timeout: commandsTimeout });
            await this.page.click(productElements.RemoveFromCartBtn);
            this.logger.info(`Click on Remove button for ${productName} Item`);
        }
        catch (er) {
            this.logger.error(er);
            throw new Error(er);
        }
    }

    /**
     * @example
     * Valid sort methods
     * "NameAZ",
     * "NameZA",
     * "PriceLoHi",
     * "PriceHiLo",
     */
    async sortProductsBy(sortMethod) {
        try {
            await this.page.waitForSelector(MainPageElements.Sorting.SortingBtn, { timeout: commandsTimeout });
            await this.page.click(MainPageElements.Sorting.SortingBtn);
            const sortElement = sortBy(sortMethod)
            await this.page.click(sortElement)
            this.logger.info(`Product list have beed sorted by ${sortBy} method`);
        }
        catch (er) {
            this.logger.error(er);
            throw new Error(er);
        }
    }

    async clickCart() {
        try {
            await this.page.waitForSelector(GeneralElements.CartBtn, { timeout: commandsTimeout });
            await this.page.click(GeneralElements.CartBtn);
            this.logger.info("Click on Cart button");
        }
        catch (er) {
            this.logger.error(er);
            throw new Error(er);
        }
    }

    /**
    * @example 
     * Valid Product Names: 
     * "Backpack",
     * "BikeLight",
     * "BoltTshirt",
     * "FleeceJacket",
     * "Onesie",
     * "TestTshirt",
     */
    async clickProductTitle(productName) {
        try {
            const productElements = findProductButton(productName)
            await this.page.waitForSelector(productElements.Title, { timeout: commandsTimeout });
            await this.page.click(productElements.Title);
            this.logger.info(`Click on title for ${productName} Item`);
        }
        catch (er) {
            this.logger.error(er);
            throw new Error(er);
        }
    }

    async clickBackToProducts() {
        try {
            await this.page.waitForSelector(MainPageElements.BackToProductBtn, { timeout: commandsTimeout });
            await this.page.click(MainPageElements.BackToProductBtn);
            this.logger.info("Click on Back to products button");
        }
        catch (er) {
            this.logger.error(er);
            throw new Error(er);
        }
    }

    async selectRandomProduct() {
        try {
            await this.page.waitForSelector(MainPageElements.AllItems, { timeout: commandsTimeout });
            const allItems = [await this.page.$$(MainPageElements.AllItems)]
            console.log(`AllItems-> ${allItems}`)
            let kati = Object.entries(allItems)
            console.log(kati[0][1], "------------------------------")
            const productSelection = Math.floor(Math.random() * kati[0][1].length) + 1
            console.log(`ProductItem-> ${productSelection}`)
            await this.page.click(MainPageElements.ProductsAddToCartButton(productSelection));
            this.logger.info("Click on a random product");
        }
        catch (er) {
            this.logger.error(er);
            throw new Error(er);
        }
    }
}

module.exports = ProductsPage;