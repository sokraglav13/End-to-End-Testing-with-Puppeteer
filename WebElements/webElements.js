// const { By } = require("selenium-webdriver")

// module.exports = {
// LoginPageElements: {
//     UsernameField: By.id("user-name"),
//     PasswordField: By.id("password"),
//     LoginBtn: By.id("login-button"),
//     ErrorMessage: By.css('div.error-message-container.error h3[data-test="error"]')
// },
// MainPageElements: {
//     CartBtn: By.id("shopping_cart_container"),
//     SortingBtn: By.css(".select_container"),
//     Sorting: {
//         ByNameA_Z: By.css("option[value='az']"),
//         ByNameZ_A: By.css("option[value='za']"),
//         ByPriceLowToHigh: By.css("option[value='lohi']"),
//         ByPriceHighToLow: By.css("option[value='hilo']"),
//     },
//     BackpackAddToCardBtn: By.css("#add-to-cart-sauce-labs-backpack"),
//     BackpackRemoveBtn: By.css("#remove-sauce-labs-backpack"),
//     BikeLightAddToCardBtn: By.css("#add-to-cart-sauce-labs-bike-light"),
//     BikeLightRemoveBtn: By.css("#remove-sauce-labs-bike-light"),

// },
// CartPageElements: {
//     ContinueShoppingBtn: By.css("#continue-shopping"),
//     CheckoutBtn: By.css("#checkout")
// },
// CheckoutPageElements: {
//     FirstnameField: By.css("#first-name"),
//     LastnameField: By.css("#last-name"),
//     ZipcodeField: By.css("#postal-code"),
//     ErrorMessage: By.css("h3[data-test='error']"),
//     CancelBtn: By.css("#cancel"),
//     ContinueBtn: By.css("#continue"),
//     BackpackProductTitle: By.xpath("//div[normalize-space()='Sauce Labs Backpack']"),
//     BackpackProductPrice: By.xpath("//div[@class='cart_item_label']//div[text()='Sauce Labs Backpack']/../../..//div[@class='inventory_item_price']"),
//     BikeLightProductTitle: By.xpath("//div[normalize-space()='Sauce Labs Bike Light']"),
//     BikeLightProductPrice: By.xpath("//div[@class='cart_item_label']//div[text()='Sauce Labs Bike Light']/../../..//div[@class='inventory_item_price']"),
//     PriceTotal: By.css(".summary_subtotal_label"),
//     TaxPrice: By.css(".summary_tax_label"),
//     TotalPriceIncludesTax: By.css(".summary_total_label")
// },
// }




module.exports = {
    LoginPageElements: {
        UsernameField: '#user-name',
        PasswordField: '#password',
        LoginBtn: '#login-button',
        ErrorMessage: 'div.error-message-container.error h3[data-test="error"]'
    },
    MainPageElements: {
        BackpackAddToCardBtn: '#add-to-cart-sauce-labs-backpack',
        BackpackRemoveBtn: '#remove-sauce-labs-backpack',
        BikeLightAddToCardBtn: '#add-to-cart-sauce-labs-bike-light',
        BikeLightRemoveBtn: '#remove-sauce-labs-bike-light',
        CartBtn: '#shopping_cart_container'
    },
    CartPageElements: {
        CheckoutBtn: '#checkout'
    },
    CheckoutPageElements: {
        ContinueBtn: '#continue',
        ErrorMessage: '.error-message-container',
        FirstnameField: '#first-name',
        LastnameField: '#last-name',
        ZipcodeField: '#postal-code',
        BackpackProductTitle: "a[id='item_4_title_link'] div[class='inventory_item_name']",
        BackpackProductPrice: "[data-test] [data-test='inventory-item']:nth-of-type(3) [data-test='inventory-item-price']",
        BikeLightProductTitle: "a[id='item_0_title_link'] div[class='inventory_item_name']",
        BikeLightProductPrice: "[data-test] [data-test='inventory-item']:nth-of-type(4) [data-test='inventory-item-price']",
        PriceTotal: '.summary_subtotal_label',
        TaxPrice: '.summary_tax_label',
        TotalPriceIncludesTax: '.summary_total_label'
    }
};
