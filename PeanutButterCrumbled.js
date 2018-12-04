const Cookie = require("./Cookie")
class PeanutButterCrumbled extends Cookie {
    constructor(ingredients) {
        super("peanut butter crumbled",ingredients)
        this.peanut_butter_count = 100
    }
}
module.exports = PeanutButterCrumbled