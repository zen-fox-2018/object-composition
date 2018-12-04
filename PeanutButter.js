let Cookie = require(`./Cookie`)

class PeanutButter extends Cookie{
    constructor(obj) {
        super(obj.name, obj.ingredient, obj.isSugar)
        this.peanut_count = 100
    }
}

module.exports = PeanutButter