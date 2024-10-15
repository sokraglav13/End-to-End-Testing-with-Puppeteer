const BasePageFunctions = require("./BasePageFunctions");
const { LoginPageElements } = require("../WebElements/LoginPageElements");
const { commandsTimeout } = require("../config");

class LoginPage extends BasePageFunctions {
    constructor(logger, page) {
        super(logger);
        this.page = page;
    }

    /**This function fill the required fields and performs login action to the system
     * 
     * @param {string} username 
     * @param {string} password 
     */
    async login(username, password) {
        try {
            await this.type(LoginPageElements.UsernameField, username);
            await this.type(LoginPageElements.PasswordField, password);
            await this.click(LoginPageElements.LoginBtn);
            this.logger.info("Login action");
        }
        catch (er) {
            this.logger.error(er);
            throw new Error(er);
        }
    }

    async getErrorMessage() {
        try {
            this.logger.info("Get Error code from Login Page");
            await this.page.waitForSelector(LoginPageElements.ErrorMessage, { timeout: commandsTimeout });
            return await this.page.$eval(LoginPageElements.ErrorMessage, el => el.textContent);
        }
        catch (er) {
            this.logger.error(er);
            throw new Error(er);
        }
    }

}

module.exports = LoginPage;