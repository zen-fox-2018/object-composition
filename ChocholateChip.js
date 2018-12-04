const Cookie = require('./Cookie')
class ChocholateChip extends Cookie {
    constructor(ingridients) {
        super("chocolate chip",ingridients)
        this.choc_chip_count = 200
    }
}
module.exports = ChocholateChip