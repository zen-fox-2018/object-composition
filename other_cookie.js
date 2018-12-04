
const Cookie = require("./composition");
const Ingredients = require("./ingredients")

class OtherCookie extends Cookie {
    constructor(name, ingredients) {
        super()
        this.name = name
        this.chocolate_butter = 150
        this.amountIngredients(ingredients)
    }

    amountIngredients(options) {
        console.log(options)
    }
}
let butter = new OtherCookie();
// butter.amountIngredients()

module.exports = OtherCookie