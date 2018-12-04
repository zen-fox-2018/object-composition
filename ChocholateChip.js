const Cookie = require('./Cookie.js')
class ChocholateChip extends Cookie {
    constructor(name, ingredients) {
        super()
        this.name = name
        this.ingredients = ingredients
        this.choc_chip_count = 200
    }
}

module.exports = ChocholateChip