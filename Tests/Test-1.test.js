const { baseUrl, timeoutTest } = require("../config");
const BasePageFunctions = require("../Pages/BasePageFunctions");
const { Username, Password } = require("../TestData/Accounts").NormalAccount;
const { expectedResults } = require("../TestData/Test-1Data").Test1Data;
const Logger = require("../Logger/Logger");
const { assert } = require("chai");
const testName = "Test-1";
const { startRecording, stopRecording } = require("../VideoRecorder/videoRecorder");

describe("Test 1", function () {
    let basePageFunctions;
    const logger = new Logger();

    before(async function () {
        this.timeout(timeoutTest);
        logger.startLoggin(testName);
        basePageFunctions = new BasePageFunctions();
        await basePageFunctions.launchBrowser();
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
        await basePageFunctions.login(Username, Password);
        await basePageFunctions.addBackpackToCart();
        await basePageFunctions.clickCart();
        await basePageFunctions.clickCheckout();
        await basePageFunctions.clickContinueInCheckout();
        const actualResult = await basePageFunctions.getErrorInCheckout();
        assert.equal(actualResult, expectedResults);
    });
});
