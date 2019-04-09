const Cookie = require('./Cookie')

class PeanutButter extends Cookie {
  constructor(name, bahan) {
    super(name, bahan)
    this.peanut_count = 100
  }
}

module.exports = PeanutButter