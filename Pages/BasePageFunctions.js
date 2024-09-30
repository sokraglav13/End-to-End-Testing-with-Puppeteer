// const puppeteer = require('puppeteer');
const puppeteer = require('puppeteer-extra');
const { commandsTimeout, browserConfigurations } = require("../config");

class BasePageFunctions {
    constructor(logger) {
        this.browser = null;
        this.page = null;
        this.recorder = null;
        this.logger = logger
    }

    /** This function initialize the page instance and launches the browser */
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

    /** This function returns the instance of page */
    getPage() {
        try {
            return this.page
        }
        catch (er) {
            this.logger.error(er);
        }
    }

    /** This function closes the browser instance */
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

    /** This function open the input url
     * @param {string} url
     */
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

    /** This function types input value into text fields
     * @param {Element} element 
     * @param {string} text 
     */
    async type(element, text) {
        await this.page.waitForSelector(element, { timeout: commandsTimeout });
        await this.page.type(element, text);
    }

    /** This function clicks on the input elements
     * @param {Element} element 
     */
    async click(element) {
        await this.page.waitForSelector(element, { timeout: commandsTimeout });
        await this.page.click(element);
    }

    /** This function sets the window size to fullscreen */
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

    /** This function clicks keyboard key by input value 
     * @param {string} key 
    */
    async pressKeyboardButton(key) {
        await this.page.keyboard.press(key);
    }

    /** This function returns the text from element
     * @param {Element} element 
    */
    async getText(element) {
        try {
            this.logger.info("Get Text");
            await this.page.waitForSelector(element, { timeout: commandsTimeout });
            return await this.page.$eval(element, el => el.textContent);
        }
        catch (er) {
            this.logger.error(er);
            throw new Error(er);
        }
    }

    /** This function delays the execution by input value
     * @param {number} time 
     */
    async delay(time) {
        return new Promise(function (resolve) {
            this.logger.info("Pausing the execution for ", time, "ms")
            setTimeout(resolve, time)
        });
    }

    async isElementVisible(element) {
        const elementHandle = await this.page.$(element)
        return await elementHandle.evaluate((element) => {
            const style = window.getComputedStyle(element);
            return style && style.display !== 'none' && style.visibility !== 'hidden' && style.opacity !== '0';
        });
    }
}

module.exports = BasePageFunctions;
