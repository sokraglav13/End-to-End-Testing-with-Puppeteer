const { Products } = require("./Dictionary");
const { MainPageElements } = require("../WebElements/ProductsPageElements");

const findProductButton = (productName) => {
    if (Products.includes(productName)) {
        return MainPageElements[productName];
    } else {
        throw new Error(`This input product name does not exists! \nInput value: '${productName}'`);
    }
}

const getClearValue = (value) => {
    const match = value.match(/\$[0-9,.]+/);
    return match ? match[0] : null;
}

const sortBy = (sortMethod) => {
    switch (sortMethod) {
        case "NameAZ":
            return MainPageElements.Sorting.AZSorting
        case "NameZA":
            return MainPageElements.Sorting.ZASorting
        case "PriceLoHi":
            return MainPageElements.Sorting.lohiSorting
        case "PriceHiLo":
            return MainPageElements.Sorting.hiloSorting
        default:
            throw new Error("Input sort methos is invalid!")
    }
}

module.exports = { getClearValue, findProductButton, sortBy }