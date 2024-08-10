const puppeteer = require('puppeteer');
const { LoginPageElements, MainPageElements, CartPageElements, CheckoutPageElements } = require("../WebElements/webElements");
const { commandsTimeout } = require("../config");
const Logger = require("../Logger/Logger");
const { PuppeteerScreenRecorder } = require('puppeteer-screen-recorder');
const conf34 = {
    followNewTab: true,
    fps: 30,
    videoFrame: {
        width: 1530,
        height: 900,
    },
    videoCrf: 18,
    videoCodec: 'libx264',
    videoPreset: 'ultrafast',
    videoBitrate: 1000,
    autopad: {
        color: 'black' | '#35A5FF',
    },
    aspectRatio: '16:9',
};
class BasePageFunctions {
    logger;
    constructor() {
        this.browser = null;
        this.page = null;
        this.recorder = null;
        this.logger = new Logger();
    }

    async launchBrowser() {
        this.browser = await puppeteer.launch(
            {
                executablePath: 'C:/testBrowsers/Chrome_V119.0.6045.105/chrome.exe',
                headless: false,
                slowMo: 20,
                args: [
                    '--start-fullscreen',

                ]
            },
        )
        this.page = await this.browser.newPage();
    }

    async getPage() {
        return this.page
    }

    async quit() {
        await this.browser.close();
    }

    async openUrl(url) {
        await this.page.goto(url, { waitUntil: 'networkidle0' });
        this.logger.info("Open url");
    }

    async setFullscreen() {
        this.page.setViewport({
            width: 1530,
            height: 900,
        });

        this.logger.info("Fullscreen size set");
    }

    async login(username, password) {
        await this.page.type(LoginPageElements.UsernameField, username);
        await this.page.type(LoginPageElements.PasswordField, password);
        await this.page.click(LoginPageElements.LoginBtn);
        this.logger.info("Login action");
    }

    async addBackpackToCart() {
        await this.page.keyboard.press('Enter');
        await this.page.waitForSelector(MainPageElements.BackpackAddToCardBtn, { timeout: commandsTimeout });
        await this.page.click(MainPageElements.BackpackAddToCardBtn);
        this.logger.info("Click on Add to Cart button for Backpack Item");
    }

    async removeBackpackFromCart() {
        await this.page.waitForSelector(MainPageElements.BackpackRemoveBtn, { timeout: commandsTimeout });
        await this.page.click(MainPageElements.BackpackRemoveBtn);
        this.logger.info("Click on Remove button for Backpack Item");
    }

    async addBikeLightToCart() {
        await this.page.waitForSelector(MainPageElements.BikeLightAddToCardBtn, { timeout: commandsTimeout });
        await this.page.click(MainPageElements.BikeLightAddToCardBtn);
        this.logger.info("Click on Add to Cart button for Bike Light Item");
    }

    async removeBikeLightFromCart() {
        await this.page.waitForSelector(MainPageElements.BikeLightRemoveBtn, { timeout: commandsTimeout });
        await this.page.click(MainPageElements.BikeLightRemoveBtn);
        this.logger.info("Click on Remove button for Bike Light Item");
    }

    async clickCart() {
        await this.page.waitForSelector(MainPageElements.CartBtn, { timeout: commandsTimeout });
        await this.page.click(MainPageElements.CartBtn);
        this.logger.info("Click on Cart button");
    }

    async clickCheckout() {
        await this.page.waitForSelector(CartPageElements.CheckoutBtn, { timeout: commandsTimeout });
        await this.page.click(CartPageElements.CheckoutBtn);
        this.logger.info("Click on Checkout button");
    }

    async clickContinueInCheckout() {
        await this.page.waitForSelector(CheckoutPageElements.ContinueBtn, { timeout: commandsTimeout });
        await this.page.click(CheckoutPageElements.ContinueBtn);
        this.logger.info("Click on Continue button in Checkout");
    }

    async getErrorInCheckout() {
        await this.page.waitForSelector(CheckoutPageElements.ErrorMessage, { timeout: commandsTimeout });
        this.logger.info("Get the error");
        return await this.page.$eval(CheckoutPageElements.ErrorMessage, el => el.textContent);
    }

    async fillCheckoutInformation(firstname, lastname, postalCode) {
        await this.page.waitForSelector(CheckoutPageElements.FirstnameField, { timeout: commandsTimeout });
        await this.page.type(CheckoutPageElements.FirstnameField, firstname);
        await this.page.type(CheckoutPageElements.LastnameField, lastname);
        await this.page.type(CheckoutPageElements.ZipcodeField, postalCode);
        this.logger.info("Fills the Order Information Form");
    }

    async getBackpackProductTitle() {
        await this.page.waitForSelector(CheckoutPageElements.BackpackProductTitle, { timeout: commandsTimeout });
        this.logger.info("Get backpack product title");
        return await this.page.$eval(CheckoutPageElements.BackpackProductTitle, el => el.textContent);
    }

    async getBackpackProductPrice() {
        await this.page.waitForSelector(CheckoutPageElements.BackpackProductPrice, { timeout: commandsTimeout });
        this.logger.info("Get backpack product price");
        return await this.page.$eval(CheckoutPageElements.BackpackProductPrice, el => el.textContent);
    }

    async getBikeLightProductTitle() {
        await this.page.waitForSelector(CheckoutPageElements.BikeLightProductTitle, { timeout: commandsTimeout });
        this.logger.info("Get bike light product title");
        return await this.page.$eval(CheckoutPageElements.BikeLightProductTitle, el => el.textContent);
    }

    async getBikeLightProductPrice() {
        await this.page.waitForSelector(CheckoutPageElements.BikeLightProductPrice, { timeout: commandsTimeout });
        this.logger.info("Get bike light product price");
        return await this.page.$eval(CheckoutPageElements.BikeLightProductPrice, el => el.textContent);
    }

    async getItemsTotal() {
        this.logger.info("Get items total price");
        await this.page.waitForSelector(CheckoutPageElements.PriceTotal, { timeout: commandsTimeout });
        const fullText = await this.page.$eval(CheckoutPageElements.PriceTotal, el => el.textContent);
        const match = fullText.match(/\$[0-9,.]+/);
        return match ? match[0] : null;
    }

    async getItemsTax() {
        this.logger.info("Get tax price");
        await this.page.waitForSelector(CheckoutPageElements.TaxPrice, { timeout: commandsTimeout });
        const fullText = await this.page.$eval(CheckoutPageElements.TaxPrice, el => el.textContent);
        const match = fullText.match(/\$[0-9,.]+/);
        return match ? match[0] : null;
    }

    async getItemsTotalPriceIncludeTax() {
        this.logger.info("Get items total price includes tax");
        await this.page.waitForSelector(CheckoutPageElements.TotalPriceIncludesTax, { timeout: commandsTimeout });
        const fullText = await this.page.$eval(CheckoutPageElements.TotalPriceIncludesTax, el => el.textContent);
        const match = fullText.match(/\$[0-9,.]+/);
        return match ? match[0] : null;
    }
}

module.exports = BasePageFunctions;
