const Ingredient =  require('./Ingredient.js')

class Cookie {
  constructor(cookieName, ingredients) {
    this.name = cookieName
    this.status = "mentah"
    this.ingredients = []
    this.ingredientsSplit(ingredients)
  }

  bake() {
    this.status = "selesai dimasak"
  }

  ingredientsSplit(ingredients) {
    let ingredientArr = ingredients.split(',')
    for (let j = 0; j < ingredientArr.length; j++) {
      let ingredientSplit = ingredientArr[j].split(':')
      let ingredientObj = {
        name: ingredientSplit[1].trim(),
        amount: ingredientSplit[0].trim(),
      }
      this.ingredients.push(new Ingredient(ingredientObj))
    }
  }
}

class PeanutButter extends Cookie {
  constructor(ingredients) {
    super('peanut butter', ingredients)
    this.penaut_count = 100
  }
}

class ChocolateChip extends Cookie {
  constructor(ingredients) {
    super('chocolate chip', ingredients)
    this.choc_chip_count = 200
  }
}

class OtherCookie extends Cookie{
  constructor(cookieName, ingredients) {
    super(cookieName, ingredients)
    this.other_count = 150
  }
}

class ChocolateChipCrumbled {
  constructor(ingredients) {
    this.name = 'chocolate chip crumbled'
    this.status = "mentah"
    this.ingredients = []
    this.choc_chip_count = 150
    this.ingredientsSplit(ingredients)
  }

  ingredientsSplit(ingredients) {
    let ingredientArr = ingredients.split(',')
    for (let j = 0; j < ingredientArr.length; j++) {
      let ingredientSplit = ingredientArr[j].split(':')
      let ingredientObj = {
        name: ingredientSplit[1].trim(),
        amount: ingredientSplit[0].trim(),
      }
      this.ingredients.push(new Ingredient(ingredientObj))
    }
  }
}

class PeanutButterCrumbled {
  constructor(ingredients) {
    this.name = 'peanut butter crumbled'
    this.status = "mentah"
    this.ingredients = []
    this.peanut_count = 75
    this.ingredientsSplit(ingredients)
  }

  ingredientsSplit(ingredients) {
    let ingredientArr = ingredients.split(',')
    for (let j = 0; j < ingredientArr.length; j++) {
      let ingredientSplit = ingredientArr[j].split(':')
      let ingredientObj = {
        name: ingredientSplit[1].trim(),
        amount: ingredientSplit[0].trim(),
      }
      this.ingredients.push(new Ingredient(ingredientObj))
    }
  }
}

module.exports = {Cookie, PeanutButter, ChocolateChip, OtherCookie, ChocolateChipCrumbled, PeanutButterCrumbled}