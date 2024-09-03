module.exports = {
    MainPageElements: {
        ProductsAddToCartButton: (num) => { return `::-p-xpath((//div[@class='inventory_item_description']//button)[${num}])` },
        AllItems: "::-p-xpath(//div[@class='inventory_item'])",
        Sorting: {
            SortingBtn: ".product_sort_container",
            AZSorting: "option[value='az']",
            ZASorting: "option[value='za']",
            lohiSorting: "option[value='lohi']",
            hiloSorting: "option[value='hilo']"
        },
        Backpack: {
            DictionaryTitle: "Backpack",
            Title: "::-p-xpath(//div[.='Sauce Labs Backpack'])",
            Description: "::-p-xpath(//div[@class='inventory_item_label' and .//div[text()='Sauce Labs Backpack']]//div[@class='inventory_item_desc'])",
            Price: "::-p-xpath(//div[@class='inventory_item_description' and .//div[text()='Sauce Labs Backpack']]//div[@class='inventory_item_price'])",
            AddToCartBtn: "#add-to-cart-sauce-labs-backpack",
            RemoveFromCartBtn: '#remove-sauce-labs-backpack'
        },
        BikeLight: {
            DictionaryTitle: "BikeLight",
            Title: "::-p-xpath(//div[.='Sauce Labs Bike Light'])",
            Description: "::-p-xpath(//div[@class='inventory_item_label' and .//div[text()='Sauce Labs Bike Light']]//div[@class='inventory_item_desc'])",
            Price: "::-p-xpath(//div[@class='inventory_item_description' and .//div[text()='Sauce Labs Bike Light']]//div[@class='inventory_item_price'])",
            AddToCartBtn: "#add-to-cart-sauce-labs-bike-light",
            RemoveFromCartBtn: '#remove-sauce-labs-bike-light'
        },
        BoltTshirt: {
            DictionaryTitle: "BoltTshirt",
            Title: "::-p-xpath(//div[.='Sauce Labs Bolt T-Shirt'])",
            Description: "::-p-xpath(//div[@class='inventory_item_label' and .//div[text()='Sauce Labs Bolt T-Shirt']]//div[@class='inventory_item_desc'])",
            Price: "::-p-xpath(//div[@class='inventory_item_description' and .//div[text()='Sauce Labs Bolt T-Shirt']]//div[@class='inventory_item_price'])",
            AddToCartBtn: "#add-to-cart-sauce-labs-bolt-t-shirt",
            RemoveFromCartBtn: '#remove-sauce-labs-bolt-t-shirt'
        },
        FleeceJacket: {
            DictionaryTitle: "BikeLight",
            Title: "::-p-xpath(//div[.='Sauce Labs Fleece Jacket'])",
            Description: "::-p-xpath(//div[@class='inventory_item_label' and .//div[text()='Sauce Labs Fleece Jacket']]//div[@class='inventory_item_desc'])",
            Price: "::-p-xpath(//div[@class='inventory_item_description' and .//div[text()='Sauce Labs Fleece Jacket']]//div[@class='inventory_item_price'])",
            AddToCartBtn: "#add-to-cart-sauce-labs-fleece-jacket",
            RemoveFromCartBtn: '#remove-sauce-labs-fleece-jacket'
        },
        Onesia: {
            DictionaryTitle: "BikeLight",
            Title: "::-p-xpath(//div[.='Sauce Labs Onesie'])",
            Description: "::-p-xpath(//div[@class='inventory_item_label' and .//div[text()='Sauce Labs Onesie']]//div[@class='inventory_item_desc'])",
            Price: "::-p-xpath(//div[@class='inventory_item_description' and .//div[text()='Sauce Labs Onesie']]//div[@class='inventory_item_price'])",
            AddToCartBtn: "#add-to-cart-sauce-labs-onesie",
            RemoveFromCartBtn: '#remove-sauce-labs-onesie'
        },
        TestAllTheThingsTshirt: {
            DictionaryTitle: "BikeLight",
            Title: "::-p-xpath(//div[.='Test.allTheThings() T-Shirt (Red)'])",
            Description: "::-p-xpath(//div[@class='inventory_item_label' and .//div[text()='Test.allTheThings() T-Shirt (Red)']]//div[@class='inventory_item_desc'])",
            Price: "::-p-xpath(//div[@class='inventory_item_description' and .//div[text()='Test.allTheThings() T-Shirt (Red)']]//div[@class='inventory_item_price'])",
            AddToCartBtn: "button[id='add-to-cart-test.allthethings()-t-shirt-(red)']",
            RemoveFromCartBtn: "button[id='add-to-cart-test.allthethings()-t-shirt-(red)']"
        },
        BackToProductBtn: "#back-to-products",
        ProductListElements: {
            ProductPrices: (number) => { return `::-p-xpath(//div[@class='inventory_item'][${number}]//div[@class='inventory_item_price'])` },
            ProductNames: (number) => { return `::-p-xpath(//div[@class='inventory_item'][${number}]//div[@class='inventory_item_name '])` },
        },
    }
}