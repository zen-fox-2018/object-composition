"use strict"
const Ingredient = require('./cookieIngredients.js')

class Cookie {
  constructor(name, ingredients) {
    this.name = name
    this.status = 'mentah'
    this.ingredients = this.putIngredients(ingredients)
    this.has_sugar = null
  }

  bake() {
    this.status = 'selesai dimasak'
  }

  putIngredients(ingredients) {
    let finalIngredients = []
    for (let i = 0; i < ingredients.length; i++) {
       finalIngredients.push(new Ingredient(ingredients[i]))
    }
    return finalIngredients
  }
}

class PeanutButter extends Cookie {
  constructor(name, ingredients) {
    super(name, ingredients)
    this.peanut_count = 100
  }
}

class ChocolateChip extends Cookie {
  constructor(name, ingredients) {
    super(name, ingredients)
    this.choc_chip_count = 200
  }
}

class OtherCookie extends Cookie {
  constructor(name, ingredients) {
    super(name, ingredients)
    this.name = name
    this.other_count = 150
  }
}

module.exports = {Cookie, PeanutButter, ChocolateChip, OtherCookie}