const { baseUrl, timeoutTest } = require("../config");
const BasePageFunctions = require("../Pages/BasePageFunctions");
const LoginPage = require("../Pages/LoginPage")
const GeneralFunctions = require("../Pages/GeneralFunctions")
const ProductsPage = require("../Pages/ProductsPage")
const YourCartPage = require("../Pages/YourCartPage");
const CheckoutPage = require("../Pages/CheckoutPage");
const { NormalAccount, Password } = require("../TestData/Accounts");
const { ProductTitle, ExpectedResults, FormInfo } = require("../TestData/Test-8-Data").Test8Data
const loggerFactory = require("../Logger/Logger");
const { assert } = require("chai");
const testName = "Test-8";
const { startRecording, stopRecording } = require("../VideoRecorder/videoRecorder");

describe(testName, function () {
    let basePageFunctions, loginPage, generalFunctions, yourCartPage, checkoutPage, productsPage;
    let logger = loggerFactory(testName)

    before(async function () {
        this.timeout(timeoutTest);
        logger.startLoggin(testName);
        basePageFunctions = new BasePageFunctions(logger);
        await basePageFunctions.launchBrowser();
        loginPage = new LoginPage(logger, basePageFunctions.getPage())
        generalFunctions = new GeneralFunctions(logger, basePageFunctions.getPage())
        productsPage = new ProductsPage(logger, basePageFunctions.getPage())
        yourCartPage = new YourCartPage(logger, basePageFunctions.getPage())
        checkoutPage = new CheckoutPage(logger, basePageFunctions.getPage())
        await startRecording(await basePageFunctions.getPage(), testName);
    });

    after(async function () {
        this.timeout(timeoutTest);
        await basePageFunctions.quit();
        await stopRecording();
        logger.endLoggin(testName);
    });

    it("Check Order Overview Elements - Valid Order - Success", async function () {
        this.timeout(timeoutTest);
        await basePageFunctions.openUrl(baseUrl);
        await basePageFunctions.setFullscreen();
        await loginPage.login(NormalAccount.Username, Password);
        await productsPage.addProductToCart(ProductTitle)
        await generalFunctions.clickCart();
        await yourCartPage.pressCheckout();
        await checkoutPage.fillInformationForm(FormInfo.Firstname, FormInfo.Lastname, FormInfo.PostalCode)
        await checkoutPage.pressContinue();
        const actualProductTotalPrice = await checkoutPage.getItemsTotal()
        const actualTaxPrice = await checkoutPage.getItemsTax()
        const actualProductTotalPriceIncludesTax = await checkoutPage.getItemsTotalPriceIncludeTax()
        assert.equal(actualProductTotalPrice, ExpectedResults.ProductTotalPrice)
        assert.equal(actualTaxPrice, ExpectedResults.Tax)
        assert.equal(actualProductTotalPriceIncludesTax, ExpectedResults.TotalPriceIncludesTax)
    });
}); 
