const Cookie = require('./Cookie')

class ChocolateChipCrumbled extends Cookie{
  constructor(name,bahan) {
    super(name, bahan)
    this.choc_chip_count = 300
  }
}

module.exports = ChocolateChipCrumbled