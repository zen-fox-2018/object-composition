
const Cookie = require("./composition")

class ChocolateChip extends Cookie {
    constructor(name) {
        super()
        this.name = name
        this.choc_chip_count = 200
    }
}

module.exports = ChocolateChip