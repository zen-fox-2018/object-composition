const Cookie = require('./Cookie')

class PeanutButterCrumbled extends Cookie{
  constructor(name,bahan) {
    super(name, bahan)
    this.choc_chip_count = 250
  }
}

module.exports = PeanutButterCrumbled