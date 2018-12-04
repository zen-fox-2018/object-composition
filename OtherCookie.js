const Cookie = require('./Cookie.js')

class OtherCookie extends Cookie {
    constructor(nama, ingredients) {
        super(nama, ingredients)
        this.other_count = 150
    }
}

module.exports = OtherCookie
