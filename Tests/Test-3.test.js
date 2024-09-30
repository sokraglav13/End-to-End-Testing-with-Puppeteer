const { baseUrl, timeoutTest } = require("../config");
const BasePageFunctions = require("../Pages/BasePageFunctions");
const LoginPage = require("../Pages/LoginPage")
const { MainPageElements } = require("../WebElements/ProductsPageElements")
const { NormalAccount, Password } = require("../TestData/Accounts");
const loggerFactory = require("../Logger/Logger");
const { assert } = require("chai");
const testName = "Test-3";
const { startRecording, stopRecording } = require("../VideoRecorder/videoRecorder");

describe("Test 3", function () {
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

    it("Login - Valid Credentails - Success", async function () {
        this.timeout(timeoutTest);
        await basePageFunctions.openUrl(baseUrl);
        await basePageFunctions.setFullscreen();
        await loginPage.login(NormalAccount.Username, Password);
        const actualPageTitle = await basePageFunctions.isElementVisible(MainPageElements.PageTitle);
        const actualAllItems = await basePageFunctions.isElementVisible(MainPageElements.AllItems);
        const actualSortingBtn = await basePageFunctions.isElementVisible(MainPageElements.Sorting.SortingBtn);
        assert.isTrue(actualPageTitle)
        assert.isTrue(actualAllItems)
        assert.isTrue(actualSortingBtn)
    });
});
