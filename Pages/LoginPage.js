const BasePageFunctions = require("./BasePageFunctions")
const { LoginPageElements } = require("../WebElements/LoginPageElements");

class LoginPage extends BasePageFunctions {
    constructor(logger, page) {
        super(logger)
        this.page = page;
    }

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

}

module.exports = LoginPage;