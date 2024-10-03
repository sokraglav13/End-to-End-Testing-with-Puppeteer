const { Products } = require("./Dictionary");
const { MainPageElements } = require("../WebElements/ProductsPageElements");
const { GeneralElements } = require("../WebElements/GeneralElements");

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

const sortByMethod = (sortMethod) => {
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

const menuOption = (option) => {
    switch (option) {
        case 1:
            return GeneralElements.AllItems
        case 2:
            return GeneralElements.About
        case 3:
            return GeneralElements.Logout
        case 4:
            return GeneralElements.ResetAppState
        default:
            throw new Error("Input sort methos is invalid!")
    }
}

module.exports = { getClearValue, findProductButton, sortByMethod, menuOption }