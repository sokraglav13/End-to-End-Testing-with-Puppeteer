module.exports = {
    CheckoutPageElements: {
        YourInformation: {
            FirstnameField: '#first-name',
            LastnameField: '#last-name',
            ZipcodeField: '#postal-code',
            ErrorMessage: '.error-message-container',
        },
        Overview: {
            CartList: ".cart_list",
            CartItems: "::-p-xpath(//div[@class='cart_list']//div[@class='cart_item'])",
            CartItemDescription: (itemNum) => { return `::-p-xpath(//div[@class='cart_list']//div[@class='cart_item'][${itemNum}]//div[@class='inventory_item_name'])`; },
            CartItemTitle: (itemNum) => { return `::-p-xpath(//div[@class='cart_list']//div[@class='cart_item'][${itemNum}]//div[@class='inventory_item_name'])`; },
            CartItemPrice: (itemNum) => { return `::-p-xpath(//div[@class='cart_list']//div[@class='cart_item'][${itemNum}]//div[@class='inventory_item_name'])`; },
            PriceTotal: '.summary_subtotal_label',
            TaxPrice: '.summary_tax_label',
            TotalPriceIncludesTax: '.summary_total_label'
        },
        Complete: {
            Title: ".complete-header",
            Description: ".complete-text",
            BackHomeBtn: "#back-to-products",
        },
        ContinueBtn: '#continue',
        Cancel: "#cancel",
        Finish: "#finish"
    }
};