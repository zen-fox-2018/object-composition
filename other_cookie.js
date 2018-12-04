
const Cookie = require("./composition");

class OtherCookie extends Cookie {
    constructor(name, materials) {
        super(name, materials)
        this.chocolate_butter = 150
    }
}

module.exports = OtherCookie