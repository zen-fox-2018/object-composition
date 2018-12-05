
const Cookie = require("./composition")

class PeanutButter extends Cookie {
    constructor(name, materials) {
        super(name, materials)
        this.peanut_butter = 100
    }
}

module.exports = PeanutButter