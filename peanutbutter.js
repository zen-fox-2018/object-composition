const Cookie = require("./cookie.js")

class PeanutButter extends Cookie {
    constructor(ingredients) {
        super('peanut butter',ingredients)
    }
}

module.exports = PeanutButter