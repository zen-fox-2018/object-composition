const Cookie = require('./Cookie.js')

class OtherCookie extends Cookie {
    constructor(name, ingredients) {
        super(name, ingredients)
        this.choc_chip_count = 150
    }
}

module.exports = OtherCookie