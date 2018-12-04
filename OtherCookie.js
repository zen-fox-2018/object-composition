const Cookies = require('./Cookie')
class OtherCookie extends Cookies {
    constructor(name,ingridients) {
        super(name,ingridients)
        this.other_count = 150
    }
}
module.exports = OtherCookie