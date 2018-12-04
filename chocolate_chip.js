
const Cookie = require("./composition")

class ChocolateChip extends Cookie {
    constructor(materials) {
        super("chocolate chips", materials)
        this.choc_chip_count = 200
    }
}

module.exports = ChocolateChip