const { Products } = require("./Dictionary")

const findProductButton = (productName) => {
    try {
        if (Products.includes(productName)) {
            console.log(true)
        } else {
            console.log(false)
        }
    } catch (error) {
        throw new Error(error)
    }
}

const getClearValue = (value) => {
    const match = value.match(/\$[0-9,.]+/);
    return match ? match[0] : null;
}

module.exports = { getClearValue }