const BasePageFunctions = require("./BasePageFunctions");
const { MainPageElements } = require("../WebElements/ProductsPageElements");
const { findProductButton } = require("../Utils/Utils");
const { commandsTimeout } = require("../config")

class ProductsPage extends BasePageFunctions {
    constructor(logger, page) {
        super(logger)
        this.page = page;
    }

    /**This function clicks on 'Add to Cart' button according to the input value for a specific product
     * @example 
     * Valid Product Names: 
     * 
     * "Backpack",
     * "BikeLight",
     * "BoltTshirt",
     * "FleeceJacket",
     * "Onesie",
     * "TestTshirt" */
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

    /**This function clicks on 'Remove' button according to the input value for a specific product
     * @example 
     * Valid Product Names: 
     * 
     * "Backpack",
     * "BikeLight",
     * "BoltTshirt",
     * "FleeceJacket",
     * "Onesie",
     * "TestTshirt" */
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

    /** This function sorts the product list according to the input value
     * @example
     * Valid sort methods:
     * 
     * "NameAZ",
     * "NameZA",
     * "PriceLoHi",
     * "PriceHiLo" */
    async sortProductsBy(sortMethod) {
        try {
            await this.page.waitForSelector(MainPageElements.Sorting.SortingBtn, { timeout: commandsTimeout });
            await this.page.click(MainPageElements.Sorting.SortingBtn);
            await this.page.select(MainPageElements.Sorting.SortingMethodsSelect, sortMethod)
            this.logger.info(`Product list have beed sorted by ${sortMethod} method`);
        }
        catch (er) {
            this.logger.error(er);
            throw new Error(er);
        }
    }

    /** This function clicks on products title according to the input value
    * @example 
     * Valid Product Names:
     *  
     * "Backpack",
     * "BikeLight",
     * "BoltTshirt",
     * "FleeceJacket",
     * "Onesie",
     * "TestTshirt" */
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

    /** This function returns all product titles in array */
    async getAllProductTitles() {
        try {
            await this.page.waitForSelector(MainPageElements.AllItems, { timeout: commandsTimeout });
            const productElem = await this.page.$$(MainPageElements.AllItems);
            let productArr = []
            for (let i = 1; i < productElem.length + 1; i++) {
                productArr.push(await this.page.$eval(MainPageElements.ProductTitle(i), el => el.textContent));
            }
            this.logger.info(`Get & Return all products title`);
            return productArr
        }
        catch (er) {
            this.logger.error(er);
            throw new Error(er);
        }
    }

    /** This function returns all product prices in array */
    async getAllProductPrices() {
        try {
            await this.page.waitForSelector(MainPageElements.AllItems, { timeout: commandsTimeout });
            const productElem = await this.page.$$(MainPageElements.AllItems);
            let productArr = []
            for (let i = 1; i < productElem.length + 1; i++) {
                productArr.push(await this.page.$eval(MainPageElements.ProductPrice(i), el => el.textContent));
            }
            this.logger.info(`Get & Return all products prices`);
            return productArr
        }
        catch (er) {
            this.logger.error(er);
            throw new Error(er);
        }
    }

    /**This function clicks the Back to Products button */
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

    /**This function selects a random product and clicks the Add to cart button */
    async selectRandomProduct() {
        try {
            await this.page.waitForSelector(MainPageElements.AllItems, { timeout: commandsTimeout });
            const allItems = await this.page.$$(MainPageElements.AllItems)
            let Products = Object.entries(allItems)
            const productSelection = Math.floor(Math.random() * Products.length) + 1
            await this.page.click(MainPageElements.ProductsAddToCartButton(productSelection));
            this.logger.info("Click add to cart button for one random products");
        }
        catch (er) {
            this.logger.error(er);
            throw new Error(er);
        }
    }

    /**This function selects two random products and clicks the Add to cart button */
    async selectTwoRandomProducts() {
        try {
            await this.page.waitForSelector(MainPageElements.AllItems, { timeout: commandsTimeout });
            const allItems = await this.page.$$(MainPageElements.AllItems)
            let Products = Object.entries(allItems)
            const firstRandomProduct = Math.floor(Math.random() * Products.length)
            const selectFirstProduct = Number(Products[firstRandomProduct][0]) + 1
            await this.page.click(MainPageElements.ProductsAddToCartButton(selectFirstProduct));
            Products.splice([firstRandomProduct], 1)
            const secondRandomProduct = Math.floor(Math.random() * Products.length)
            const selectSecondProduct = Number(Products[secondRandomProduct][0]) + 1
            await this.page.click(MainPageElements.ProductsAddToCartButton(selectSecondProduct));
            this.logger.info("Click add to cart button for two random products");
        }
        catch (er) {
            this.logger.error(er);
            throw new Error(er);
        }
    }
}

module.exports = ProductsPage;