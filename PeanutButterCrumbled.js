let Cookie = require(`./Cookie`)

class PeanutButterCrumbled extends Cookie{
    constructor(obj) {
        super(obj.name, obj.ingredient, obj.isSugar)
        this.other_count = 10000
    }
}

module.exports = PeanutButterCrumbled