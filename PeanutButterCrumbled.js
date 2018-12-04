const Cookie = require('./Cookie.js')

class PeanutButterCrumbled extends Cookie {
    constructor(name, ingredients) {
        super(name, ingredients)
        this.peanut_count = 230
    }
}

module.exports = PeanutButterCrumbled