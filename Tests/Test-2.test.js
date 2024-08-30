const { baseUrl, browser, environment, timeoutTest } = require("../config")
const BasePageFunctions = require("../Pages/BasePageFunctions");
const { Username, Password } = require("../TestData/Accounts").NormalAccount;
const { Firstname, Lastname, PostalCode, ExpectedResults } = require("../TestData/Test-2Data").Test2Data;
const loggerFactory = require("../Logger/Logger");
const { assert } = require("chai");
const testName = "Test-2";
const { startRecording, stopRecording } = require("../VideoRecorder/videoRecorder");

describe("Test 2", function () {
    let basePageFunctions;
    let logger = loggerFactory(testName);

    beforeEach(async function () {
        this.timeout(timeoutTest);
        logger.startLoggin(testName);
        basePageFunctions = new BasePageFunctions(logger);
        await basePageFunctions.launchBrowser();
        // await startRecording(await basePageFunctions.getPage(), testName);
    });

    afterEach(async function () {
        this.timeout(timeoutTest);
        await basePageFunctions.quit();
        // await stopRecording();
        logger.endLoggin(testName);
    });

    it("Checkout Overview Validation", async function () {
        this.timeout(timeoutTest);
        await basePageFunctions.openUrl(baseUrl);
        await basePageFunctions.setFullscreen();
        await basePageFunctions.login(Username, Password);
        await basePageFunctions.addBackpackToCart();
        await basePageFunctions.addBikeLightToCart();
        await basePageFunctions.clickCart();
        await basePageFunctions.clickCheckout();
        await basePageFunctions.fillCheckoutInformation(Firstname, Lastname, PostalCode);
        await basePageFunctions.clickContinueInCheckout();
        const actualBackpackTitle = await basePageFunctions.getBackpackProductTitle();
        const actualBackpackPrice = await basePageFunctions.getBackpackProductPrice();
        const actualBikeLightTitle = await basePageFunctions.getBikeLightProductTitle();
        const actualBikeLightPrice = await basePageFunctions.getBikeLightProductPrice();
        const actualItemsTotal = await basePageFunctions.getItemsTotal();
        const actualTaxPrice = await basePageFunctions.getItemsTax();
        const actualTotalPriceIncludesTax = await basePageFunctions.getItemsTotalPriceIncludeTax();
        assert.equal(actualBackpackTitle, ExpectedResults.BackpackTitle);
        assert.equal(actualBackpackPrice, ExpectedResults.BackpackPrice);
        assert.equal(actualBikeLightTitle, ExpectedResults.BikeLightTitle);
        assert.equal(actualBikeLightPrice, ExpectedResults.BikeLightPrice);
        assert.equal(actualItemsTotal, ExpectedResults.ItemsTotalPrice);
        assert.equal(actualTaxPrice, ExpectedResults.TaxPrice);
        assert.equal(actualTotalPriceIncludesTax, ExpectedResults.TotalPriceIncludeTax);
    })
})