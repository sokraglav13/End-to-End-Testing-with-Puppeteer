const BasePageFunctions = require("./BasePageFunctions")
const { GeneralElements } = require("../WebElements/GeneralElements")
const { menuOption } = require("../Utils/Utils");

class GeneralFunctions extends BasePageFunctions {
    constructor(logger, page) {
        super(logger)
        this.page = page;
    }

    async clickCart() {
        try {
            await this.page.waitForSelector(GeneralElements.CartBtn, { timeout: commandsTimeout });
            await this.page.click(GeneralElements.CartBtn);
            this.logger.info(`Click on cart button`);
        }
        catch (er) {
            this.logger.error(er);
            throw new Error(er);
        }
    }

    async openMenu() {
        try {
            await this.page.waitForSelector(GeneralElements.MenuBtn, { timeout: commandsTimeout });
            await this.page.click(GeneralElements.MenuBtn);
            this.logger.info(`Click on Menu button`);
        }
        catch (er) {
            this.logger.error(er);
            throw new Error(er);
        }
    }

    /** This function selects the option from menu by input value
     * @param {Number} option 
     * @example Valid input numbers:
     * 
     *     1 - All Items
     *     2 - About
     *     3 - Logout
     *     4 - Reset App State
     */
    async selectMenuOption(option) {
        try {
            await this.page.waitForSelector(GeneralElements.AllItems, { timeout: commandsTimeout });
            await this.page.click(menuOption(option));
            this.logger.info(`Click on option from menu`);
        }
        catch (er) {
            this.logger.error(er);
            throw new Error(er);
        }
    }
}


module.exports = GeneralFunctions