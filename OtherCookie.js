let Cookie = require(`./Cookie`)

class OtherCookie extends Cookie{
    constructor(obj) {
        super(obj.name, obj.ingredient, obj.isSugar)
        this.other_count = 150
    }
}

module.exports = OtherCookie