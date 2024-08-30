const { baseUrl, timeoutTest } = require("../config");
const BasePageFunctions = require("../Pages/BasePageFunctions");
const LoginPage = require("../Pages/LoginPage")
const { Username, Password } = require("../TestData/Accounts").NormalAccount;
const { expectedResults } = require("../TestData/Test-1Data").Test1Data;
const loggerFactory = require("../Logger/Logger");
const { assert } = require("chai");
const testName = "Test-1";
const { startRecording, stopRecording } = require("../VideoRecorder/videoRecorder");

describe("Test 1", function () {
    let basePageFunctions, loginPage;
    let logger = loggerFactory(testName)
    before(async function () {
        this.timeout(timeoutTest);
        logger.startLoggin(testName);
        basePageFunctions = new BasePageFunctions(logger);
        await basePageFunctions.launchBrowser();
        loginPage = new LoginPage(logger, basePageFunctions.getPage())
        // await startRecording(await basePageFunctions.getPage(), testName);
    });

    after(async function () {
        this.timeout(timeoutTest);
        await basePageFunctions.quit();
        // await stopRecording();
        logger.endLoggin(testName);
    });

    it("Checkout Step One Error Validation", async function () {
        this.timeout(timeoutTest);
        await basePageFunctions.openUrl(baseUrl);
        await basePageFunctions.setFullscreen();
        await loginPage.login(Username, Password);
        await basePageFunctions.addBackpackToCart();
        await basePageFunctions.clickCart();
        await basePageFunctions.clickCheckout();
        await basePageFunctions.clickContinueInCheckout();
        const actualResult = await basePageFunctions.getErrorInCheckout();
        assert.equal(actualResult, expectedResults);
    });
});
