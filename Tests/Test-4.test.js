const { baseUrl, timeoutTest } = require("../config");
const BasePageFunctions = require("../Pages/BasePageFunctions");
const LoginPage = require("../Pages/LoginPage")
const { expectedMessage } = require("../TestData/Test-4-Data").Test4Data
const { LockedOutAccount, Password } = require("../TestData/Accounts");
const loggerFactory = require("../Logger/Logger");
const { assert } = require("chai");
const testName = "Test-4";
const { startRecording, stopRecording } = require("../VideoRecorder/videoRecorder");

describe(testName, function () {
    let basePageFunctions, loginPage;
    let logger = loggerFactory(testName)

    before(async function () {
        this.timeout(timeoutTest);
        logger.startLoggin(testName);
        basePageFunctions = new BasePageFunctions(logger);
        await basePageFunctions.launchBrowser();
        loginPage = new LoginPage(logger, basePageFunctions.getPage())
        await startRecording(await basePageFunctions.getPage(), testName);
    });

    after(async function () {
        this.timeout(timeoutTest);
        await basePageFunctions.quit();
        await stopRecording();
        logger.endLoggin(testName);
    });

    it("Login - Invalid Credentails - Fail", async function () {
        this.timeout(timeoutTest);
        await basePageFunctions.openUrl(baseUrl);
        await basePageFunctions.setFullscreen();
        await loginPage.login(LockedOutAccount.Username, Password);
        const actualMessage = await loginPage.getErrorMessage()
        assert.equal(actualMessage, expectedMessage)
    });
});
