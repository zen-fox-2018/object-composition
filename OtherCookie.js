const Cookie = require('./Cookie')

class OtherCookie extends Cookie {
  constructor(name, bahan) {
    super(name, bahan)
    this.other_count = 150
  }
}

module.exports = OtherCookie