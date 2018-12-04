const Cookie = require ('./Cookie.js')

class ChocolateChip extends Cookie {
    constructor(nama, ingredients) {
        super('chocolate chip', ingredients)
        // this.nama = 'chocolate chip'
        this.choc_chip_count = 200
    }
}

module.exports = ChocolateChip