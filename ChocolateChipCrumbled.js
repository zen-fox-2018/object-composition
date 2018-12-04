const Cookie = require('./Cookie.js')

class ChocolateChipCrumbled extends Cookie {
    constructor(name, ingredients) {
        super(name, ingredients)
        this.choc_chip_count = 130
    }
}

module.exports = ChocolateChipCrumbled