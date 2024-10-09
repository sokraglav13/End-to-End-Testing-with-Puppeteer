const { baseUrl, timeoutTest } = require("../config");
const BasePageFunctions = require("../Pages/BasePageFunctions");
const LoginPage = require("../Pages/LoginPage");
const ProductsPage = require("../Pages/ProductsPage");
const { NormalAccount, Password } = require("../TestData/Accounts");
const { SortByMethod, ProductList } = require("../TestData/Test-5-Data").Test5Data;
const loggerFactory = require("../Logger/Logger");
const { assert } = require("chai");
const testName = "Test-5";
const { startRecording, stopRecording } = require("../VideoRecorder/videoRecorder");

describe(testName, function () {
    let basePageFunctions, loginPage, productsPage;
    let logger = loggerFactory(testName);

    before(async function () {
        this.timeout(timeoutTest);
        logger.startLoggin(testName);
        basePageFunctions = new BasePageFunctions(logger);
        await basePageFunctions.launchBrowser();
        loginPage = new LoginPage(logger, basePageFunctions.getPage());
        productsPage = new ProductsPage(logger, basePageFunctions.getPage());
        await startRecording(await basePageFunctions.getPage(), testName, logger);
    });

    after(async function () {
        this.timeout(timeoutTest);
        await basePageFunctions.quit();
        await stopRecording(logger);
        logger.endLoggin(testName);
    });

    it("Sorting - By Name & Price - Success", async function () {
        this.timeout(timeoutTest);
        await basePageFunctions.openUrl(baseUrl);
        await basePageFunctions.setFullscreen();
        await loginPage.login(NormalAccount.Username, Password);
        await productsPage.sortProductsBy(SortByMethod.NameAZ);
        const actaulProductSortedByNameAZ = await productsPage.getAllProductTitles();
        await productsPage.sortProductsBy(SortByMethod.NameZA);
        const actaulProductSortedByNameZA = await productsPage.getAllProductTitles();
        await productsPage.sortProductsBy(SortByMethod.PriceLoHi);
        const actaulProductSortedByPriceLoHi = await productsPage.getAllProductPrices();
        await productsPage.sortProductsBy(SortByMethod.PriceHiLo);
        const actaulProductSortedByPriceHiLo = await productsPage.getAllProductPrices();
        assert.deepEqual(actaulProductSortedByNameAZ, ProductList.SortedByNameAZ);
        assert.deepEqual(actaulProductSortedByNameZA, ProductList.SortedByNameZA);
        assert.deepEqual(actaulProductSortedByPriceLoHi, ProductList.SortedByPriceLoHi);
        assert.deepEqual(actaulProductSortedByPriceHiLo, ProductList.SortedByPriceHiLo);
    });
});
