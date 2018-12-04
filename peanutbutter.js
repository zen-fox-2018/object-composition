'use strict'
const Cookie = require ('./composition.js');

class PeanutButter extends Cookie {
  constructor(name, ingredients) {
    super(name, ingredients);
    this.peanut_count = 100;
  }
}

module.exports = PeanutButter;