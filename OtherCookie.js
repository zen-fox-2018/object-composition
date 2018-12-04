const Cookie = require('./Cookie')

class OtherCookie extends Cookie {
    constructor(name, ingredients) {
        super(name,ingredients)
        this.name = name
        this.other_count =150
    }
}

module.exports = OtherCookie