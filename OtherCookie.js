"use strict"
const Cookie = require ('./Cookie.js');

class OtherCookie extends Cookie {
  constructor (name, ingredients) {
    super(name, ingredients);
    this.other_count = 150;
  }
}

module.exports = OtherCookie;
