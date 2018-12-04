const Cookie = require("./cookie.js")

class ChocolateChip extends Cookie {
    constructor(ingredients) {
        super('chocolate chip',ingredients)
    }
}

module.exports = ChocolateChip