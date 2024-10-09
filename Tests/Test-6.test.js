const { baseUrl, timeoutTest } = require("../config");
const BasePageFunctions = require("../Pages/BasePageFunctions");
const LoginPage = require("../Pages/LoginPage");
const GeneralFunctions = require("../Pages/GeneralFunctions");
const { NormalAccount, Password } = require("../TestData/Accounts");
const { LoginPageElements } = require("../WebElements/LoginPageElements");
const loggerFactory = require("../Logger/Logger");
const { assert } = require("chai");
const testName = "Test-6";
const { startRecording, stopRecording } = require("../VideoRecorder/videoRecorder");

describe(testName, function () {
    let basePageFunctions, loginPage, generalFunctions, logoutOption;
    let logger = loggerFactory(testName);

    before(async function () {
        this.timeout(timeoutTest);
        logger.startLoggin(testName);
        basePageFunctions = new BasePageFunctions(logger);
        await basePageFunctions.launchBrowser();
        loginPage = new LoginPage(logger, basePageFunctions.getPage());
        generalFunctions = new GeneralFunctions(logger, basePageFunctions.getPage());
        logoutOption = 3;
        await startRecording(await basePageFunctions.getPage(), testName, logger);
    });

    after(async function () {
        this.timeout(timeoutTest);
        await basePageFunctions.quit();
        await stopRecording(logger);
        logger.endLoggin(testName);
    });

    it("Logout - Already Logged In - Success", async function () {
        this.timeout(timeoutTest);
        await basePageFunctions.openUrl(baseUrl);
        await basePageFunctions.setFullscreen();
        await loginPage.login(NormalAccount.Username, Password);
        await generalFunctions.openMenu();
        await generalFunctions.selectMenuOption(logoutOption);
        const isUsernameFieldVisible = await basePageFunctions.isElementVisible(LoginPageElements.UsernameField);
        const isPasswordFieldVisible = await basePageFunctions.isElementVisible(LoginPageElements.PasswordField);
        const isLoginBtnVisible = await basePageFunctions.isElementVisible(LoginPageElements.LoginBtn);
        assert.equal(isUsernameFieldVisible, true);
        assert.equal(isPasswordFieldVisible, true);
        assert.equal(isLoginBtnVisible, true);
    });
}); 
