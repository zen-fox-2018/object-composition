
const Cookie = require("./composition")

class PeanutButter extends Cookie {
    constructor(name) {
        super()
        this.name = name
        this.peanut_butter = 100
    }
}

module.exports = PeanutButter