const Ingredient = require('./Ingredient.js')

class Cookies {
  constructor(name, ingredients) {
    this.name = name
    this.status = "mentah"
    this.ingredients = []
    this.recipe(ingredients)
  }

  recipe(ingredients) {
    for(let i = 0 ; i < ingredients.length ; i++) {
      let name = ingredients[i].split(':')[1].trim()
      let amount = ingredients[i].split(':')[0].trim()
      this.ingredients[i] = new Ingredient(name, amount)
    }
  }

  bake() {
    this.status = "selesai dimasak"
  }

}

class PeanutButter extends Cookies {
  constructor(ingredients) {
    super('peanut butter', ingredients)
    this.peanut_count = 100
  }
}

class ChocolateChip extends Cookies {
  constructor(ingredients) {
    super('chocolate chip', ingredients)
    this.choc_chip_count = 200
  }
}

class OtherCookie extends Cookies {
  constructor(name,ingredients) {
    super(name,ingredients)
    this.other_count = 150
  }
}

class ChocolateChipCrumbled {
  constructor(ingredients) {
    this.name = "chocolate chip crumbled"
    this.status = "mentah"
    this.ingredients = this.recipe(ingredients)
    this.choc_chip_count = 200
  }

  recipe(ingredients) {
    for(let i = 0 ; i < ingredients.length ; i++) {
      let name = ingredients[i].split(':')[1].trim()
      let amount = ingredients[i].split(':')[0].trim()
      ingredients[i] = new Ingredient(name, amount)
    }
    return ingredients
  }

  bake() {
    this.status = "selesai dimasak"
  }
}

class PeanutButterCrumbled {
  constructor(ingredients) {
    this.name = "peanut butter crumbled"
    this.status = "mentah"
    this.ingredients = this.recipe(ingredients)
    this.choc_chip_count = 200
  }

  recipe(ingredients) {
    for(let i = 0 ; i < ingredients.length ; i++) {
      let name = ingredients[i].split(':')[1].trim()
      let amount = ingredients[i].split(':')[0].trim()
      ingredients[i] = new Ingredient(name, amount)
    }
    return ingredients
  }

  bake() {
    this.status = "selesai dimasak"
  }
}

module.exports = {Cookies, PeanutButter, ChocolateChip, OtherCookie, ChocolateChipCrumbled, PeanutButterCrumbled}
