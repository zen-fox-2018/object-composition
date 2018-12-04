
const Cookie = require("./composition")

class PeanutButter extends Cookie {
    constructor(materials) {
        super("peanut butter", materials)
        this.peanut_butter = 100
    }
}

module.exports = PeanutButter