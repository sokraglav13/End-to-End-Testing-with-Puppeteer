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
