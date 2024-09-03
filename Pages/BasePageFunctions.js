// const puppeteer = require('puppeteer');
const puppeteer = require('puppeteer-extra');
const { CheckoutPageElements } = require("../WebElements/CheckoutPageElements");
const { commandsTimeout, browserConfigurations } = require("../config");
const { getClearValue } = require("../Utils/Utils");

class BasePageFunctions {
    constructor(logger) {
        this.browser = null;
        this.page = null;
        this.recorder = null;
        this.logger = logger
    }

    async launchBrowser() {
        try {
            //Disabling safe browsing 
            await puppeteer.use(require('puppeteer-extra-plugin-user-preferences')({
                userPrefs: {
                    safebrowsing: {
                        enabled: false,
                        enhanced: false
                    }
                }
            }));
            this.browser = await puppeteer.launch(browserConfigurations)
            this.page = await this.browser.newPage();
            this.logger.info("Browser launched successfully");
        }
        catch (er) {
            this.logger.error(er);
        }
    }

    getPage() {
        try {
            return this.page
        }
        catch (er) {
            this.logger.error(er);
        }
    }

    async quit() {
        try {
            await this.browser.close();
            this.logger.info("Browser Closed");
        }
        catch (er) {
            this.logger.error(er);
            throw new Error(er);
        }
    }

    async openUrl(url) {
        try {
            await this.page.goto(url, { waitUntil: 'networkidle0' });
            this.logger.info("Open url");
        }
        catch (er) {
            this.logger.error(er);
            throw new Error(er);
        }
    }

    async type(element, text) {
        await this.page.waitForSelector(element, { timeout: commandsTimeout });
        await this.page.type(element, text);
    }

    async click(element) {
        await this.page.waitForSelector(element, { timeout: commandsTimeout });
        await this.page.click(element);
    }

    async setFullscreen() {
        try {
            this.page.setViewport({
                width: 1530,
                height: 900,
            });
            this.logger.info("Fullscreen size set");
        }
        catch (er) {
            this.logger.error(er);
            throw new Error(er);
        }

    }

    async pressKeyboardButton(key) {
        await this.page.keyboard.press(key);
    }


    async addBackpackToCart() { }
    async addBackpackToCart() { }
    async addBackpackToCart() { }
    async addBackpackToCart() { }
    async addBackpackToCart() { }

    async getBackpackProductPrice() {
        try {
            await this.page.waitForSelector(CheckoutPageElements.BackpackProductPrice, { timeout: commandsTimeout });
            this.logger.info("Get backpack product price");
            return await this.page.$eval(CheckoutPageElements.BackpackProductPrice, el => el.textContent);
        }
        catch (er) {
            this.logger.error(er);
            throw new Error(er);
        }
    }

    async getBikeLightProductTitle() {
        try {
            await this.page.waitForSelector(CheckoutPageElements.BikeLightProductTitle, { timeout: commandsTimeout });
            this.logger.info("Get bike light product title");
            return await this.page.$eval(CheckoutPageElements.BikeLightProductTitle, el => el.textContent);
        }
        catch (er) {
            this.logger.error(er);
            throw new Error(er);
        }
    }

    async getBikeLightProductPrice() {
        try {
            await this.page.waitForSelector(CheckoutPageElements.BikeLightProductPrice, { timeout: commandsTimeout });
            this.logger.info("Get bike light product price");
            return await this.page.$eval(CheckoutPageElements.BikeLightProductPrice, el => el.textContent);
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

    async getText(elem) {
        try {
            this.logger.info("Get Text");
            await this.page.waitForSelector(elem, { timeout: commandsTimeout });
            return await this.page.$eval(elem, el => el.textContent);
        }
        catch (er) {
            this.logger.error(er);
            throw new Error(er);
        }
    }


    async delay(time) {
        return new Promise(function (resolve) {
            setTimeout(resolve, time)
        });
    }
}

module.exports = BasePageFunctions;
