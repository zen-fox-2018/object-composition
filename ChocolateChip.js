let Cookie = require(`./Cookie`)

class ChocolateChip extends Cookie{
    constructor(obj) {
        super(obj.name, obj.ingredient, obj.isSugar)
        this.choc_chip_count = 200
    }
}

module.exports = ChocolateChip