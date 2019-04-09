const Cookie = require('./Cookie')

class ChocolateChip extends Cookie{
  constructor(name,bahan) {
    super(name, bahan)
    this.choc_chip_count = 200
  }
}

module.exports = ChocolateChip