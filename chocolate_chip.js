
const Cookie = require("./composition")

class ChocolateChip extends Cookie {
    constructor(name, materials) {
        super(name, materials)
        this.choc_chip_count = 200
    }
}

module.exports = ChocolateChip