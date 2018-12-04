const Cookie = require ('./Cookie')
class ChocolateChipCrumbled extends Cookie {
    constructor(ingredients) {
        super("chocolate chip crumbled",ingredients)
        this.chip_crumbled_count = 50
    }
}

module.exports = ChocolateChipCrumbled