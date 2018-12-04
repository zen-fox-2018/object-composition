"use-strict"

const fs = require('fs')

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

class Ingredient {
  constructor(name , amount) {
    this.name = name
    this.amount = amount
  }

}

class CookieFactory {
  static create(options) {
    this.file = options
    this.cookies = fs.readFileSync(this.file , 'utf-8').split('\n')
    this.result = this.maker(this.cookies)
    // console.log(this.result[0]);
    return this.result
  }

  static maker(list) {
    let output = []
    let cookies = list.map(a => a.split('='))
    for ( let i = 0 ; i < cookies.length ; i++ ) {
      let cookie = null
      // console.log(cookies[i][1]);
      if (cookies[i][0].trim() === 'chocolate chip') {
        cookie = new ChocolateChip(cookies[i][1].split(','))
      } else if (cookies[i][0].trim() === 'peanut butter') {
        cookie = new PeanutButter(cookies[i][1].split(','))
      } else if (cookies[i][0].trim() === 'chocolate chip crumbled') {
        cookie = new ChocolateChipCrumbled(cookies[i][1].split(','))
      } else if (cookies[i][0].trim() === 'peanut butter crumbled') {
        cookie = new PeanutButterCrumbled(cookies[i][1].split(','))
      } else if (cookies[i][0] !== ''){
        cookie = new OtherCookie(cookies[i][0].trim(), cookies[i][1].split(','))
      }

      if (cookie) {
        output.push(cookie)
      }
    }
    return output
  }

  static cookieRecommendation(day, cookies) {
    let output = []
    // console.log(cookies.length);
    for (let i = 0 ; i < cookies.length ; i++) {
      let cek = true
      for (let j = 0 ; j < cookies[i].ingredients.length ; j++) {
        if (cookies[i].ingredients[j].name === 'sugar') {
          cek = false
        }
      }
      if (cek) {
        output.push(cookies[i])
      }
    }
    return output
  }
}

let options = './cookies.txt'
let batch_of_cookies = CookieFactory.create(options)
let glutenFree = CookieFactory.cookieRecommendation('today', batch_of_cookies)
// console.log(batch_of_cookies);
console.log("sugar free cakes are :");
for ( let i = 0 ; i < glutenFree.length ; i++ ) {
  glutenFree[i].bake()
  // console.log(glutenFree[i].name);
  console.log(glutenFree[i]);
}
