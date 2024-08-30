const { Products } = require("../Utils/Dictionary")

module.exports = {
    GeneralElements: {
        MenuBtn: "#react-burger-menu-btn",
        AllItems: "#inventory_sidebar_link",
        About: "#about_sidebar_link",
        Logout: "#logout_sidebar_link",
        ResetAppState: "#reset_sidebar_link"
    },
    LoginPageElements: {
        UsernameField: '#user-name',
        PasswordField: '#password',
        LoginBtn: '#login-button',
        ErrorMessage: 'div.error-message-container.error h3[data-test="error"]'
    },
    MainPageElements: {
        Sorting: {
            SortingBtn: ".product_sort_container",
            AZSorting: "option[value='az']",
            ZASorting: "option[value='za']",
            logiSorting: "option[value='lohi']",
            hiloSorting: "option[value='hilo']"
        },
        Backpack: {
            DictionaryTitle: "Backpack",
            ProductTitle: "::-p-xpath(//div[.='Sauce Labs Backpack'])",
            Description: "//div[@class='inventory_item_label' and .//div[text()='Sauce Labs Backpack']]//div[@class='inventory_item_desc']",
            Price: "//div[@class='inventory_item_description' and .//div[text()='Sauce Labs Backpack']]//div[@class='inventory_item_price']",
            AddToCartBtn: "#add-to-cart-sauce-labs-backpack",
            RemoveFromCartBtn: '#remove-sauce-labs-backpack'
        },
        BikeLight: {
            DictionaryTitle: "BikeLight",
            ProductTitle: "::-p-xpath(//div[.='Sauce Labs Bike Light'])",
            Description: "//div[@class='inventory_item_label' and .//div[text()='Sauce Labs Bike Light']]//div[@class='inventory_item_desc']",
            Price: "//div[@class='inventory_item_description' and .//div[text()='Sauce Labs Bike Light']]//div[@class='inventory_item_price']",
            AddToCartBtn: "#add-to-cart-sauce-labs-bike-light",
            RemoveFromCartBtn: '#remove-sauce-labs-bike-light'
        },
        BoltTshirt: {
            DictionaryTitle: "BoltTshirt",
            ProductTitle: "::-p-xpath(//div[.='Sauce Labs Bolt T-Shirt'])",
            Description: "//div[@class='inventory_item_label' and .//div[text()='Sauce Labs Bolt T-Shirt']]//div[@class='inventory_item_desc']",
            Price: "//div[@class='inventory_item_description' and .//div[text()='Sauce Labs Bolt T-Shirt']]//div[@class='inventory_item_price']",
            AddToCartBtn: "#add-to-cart-sauce-labs-bolt-t-shirt",
            RemoveFromCartBtn: '#remove-sauce-labs-bolt-t-shirt'
        },
        FleeceJacket: {
            DictionaryTitle: "BikeLight",
            ProductTitle: "::-p-xpath(//div[.='Sauce Labs Fleece Jacket'])",
            Description: "//div[@class='inventory_item_label' and .//div[text()='Sauce Labs Fleece Jacket']]//div[@class='inventory_item_desc']",
            Price: "//div[@class='inventory_item_description' and .//div[text()='Sauce Labs Fleece Jacket']]//div[@class='inventory_item_price']",
            AddToCartBtn: "#add-to-cart-sauce-labs-fleece-jacket",
            RemoveFromCartBtn: '#remove-sauce-labs-fleece-jacket'
        },
        Onesia: {
            DictionaryTitle: "BikeLight",
            ProductTitle: "::-p-xpath(//div[.='Sauce Labs Onesie'])",
            Description: "//div[@class='inventory_item_label' and .//div[text()='Sauce Labs Onesie']]//div[@class='inventory_item_desc']",
            Price: "//div[@class='inventory_item_description' and .//div[text()='Sauce Labs Onesie']]//div[@class='inventory_item_price']",
            AddToCartBtn: "#add-to-cart-sauce-labs-onesie",
            RemoveFromCartBtn: '#remove-sauce-labs-onesie'
        },
        TestAllTheThingsTshirt: {
            DictionaryTitle: "BikeLight",
            ProductTitle: "::-p-xpath(//div[.='Test.allTheThings() T-Shirt (Red)'])",
            Description: "//div[@class='inventory_item_label' and .//div[text()='Test.allTheThings() T-Shirt (Red)']]//div[@class='inventory_item_desc']",
            Price: "//div[@class='inventory_item_description' and .//div[text()='Test.allTheThings() T-Shirt (Red)']]//div[@class='inventory_item_price']",
            AddToCartBtn: "button[id='add-to-cart-test.allthethings()-t-shirt-(red)']",
            RemoveFromCartBtn: "button[id='add-to-cart-test.allthethings()-t-shirt-(red)']"
        },
        ProductListElements: {
            ProductPrices: (number) => { return `//div[@class='inventory_item'][${number}]//div[@class='inventory_item_price']` },
            ProductNames: (number) => { return `//div[@class='inventory_item'][${number}]//div[@class='inventory_item_name ']` },
        },
        CartBtn: '#shopping_cart_container'
    },
    CartPageElements: {
        CheckoutBtn: '#checkout',
        ContinueShopping: '#continue-shopping'
    },
    CheckoutPageElements: {
        YourInformation: {
            FirstnameField: '#first-name',
            LastnameField: '#last-name',
            ZipcodeField: '#postal-code',
            ErrorMessage: '.error-message-container',
        },
        Overview: {
            CartList: ".cart_list",
            CartItems: "//div[@class='cart_list']//div[@class='cart_item']",
            CartItemDescription: (itemNum) => { return `//div[@class='cart_list']//div[@class='cart_item'][${itemNum}]//div[@class='inventory_item_name']` },
            CartItemTitle: (itemNum) => { return `//div[@class='cart_list']//div[@class='cart_item'][${itemNum}]//div[@class='inventory_item_name']` },
            CartItemPrice: (itemNum) => { return `//div[@class='cart_list']//div[@class='cart_item'][${itemNum}]//div[@class='inventory_item_name']` },
            PriceTotal: '.summary_subtotal_label',
            TaxPrice: '.summary_tax_label',
            TotalPriceIncludesTax: '.summary_total_label'
        },
        Complete: {
            Title: ".complete-header",
            Description: ".complete-header",
            BackHomeBtn: "#back-to-products",
        },

        ContinueBtn: '#continue',
        Cancel: "#cancel",

    }
};

///div[@class='inventory_item_label']/a[@href='#']/div[.='Sauce Labs Backpack']

//  "//div[@class='inventory_item_description' and //div[@class='inventory_item_label' and .//div[@class='inventory_item_name ' and text()='Sauce Labs Backpack']]//div[@class='inventory_item_desc']",
