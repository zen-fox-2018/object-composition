const Cookie = require('./Cookie')
class PeanutButter extends Cookie {
    constructor(ingridients) {
        super("peanut butter",ingridients)
        this.peanut_count = 100
    }
}
module.exports = PeanutButter