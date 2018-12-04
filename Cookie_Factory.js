const {Cookie, PeanutButter, ChocolateChip, OtherCookie, ChocolateChipCrumbled, PeanutButterCrumbled} =  require('./Cookie.js')
const Ingredient =  require('./Ingredient.js')


const fs = require('fs')

class CookieFactory {
  static create(options) {
    let cookies = []
    for (let i = 0; i < options.length; i++) {
      let optionsArr = options[i].split('=')
      let cookie = optionsArr[0].trim()
      let ingredients = optionsArr[1]
      let ingredientArr = ingredients.split(',')
      let ingredient = []
      for (let j = 0; j < ingredientArr.length; j++) {
        let ingredientSplit = ingredientArr[j].split(':')
        let ingredientObj = {
          name: ingredientSplit[1].trim(),
          amount: ingredientSplit[0].trim(),
        }
        ingredient.push(new Ingredient(ingredientObj))
      }
      if (cookie === 'peanut butter') {
        cookies.push(new PeanutButter(cookie, ingredient))
      }
      else if (cookie === 'chocolate chip') {
        cookies.push(new ChocolateChip(cookie, ingredient))
      }
      else if (cookie === 'chocolate chip crumbled') {
        cookies.push(new ChocolateChipCrumbled(cookie, ingredient))
      }
      else if (cookie === 'peanut butter crumbled') {
        cookies.push(new PeanutButterCrumbled(cookie, ingredient))
      }
      else {
        cookies.push(new OtherCookie(cookie, ingredient))
      }
    }
  return cookies
  }

  static cookieRecommendation(day, cookies) {
    let result = []
    if (day === 'tuesday') {
      for (let i = 0; i < cookies.length; i++) {
        let sugarCheck = false
        for (let j = 0; j < cookies[i].ingredients.length; j++) {
          if (cookies[i].ingredients[j].name === 'sugar') {
            sugarCheck = true
          }
        }
        if (sugarCheck === false) {
          result.push(cookies[i])
        }
      }
    }
    return result
  }
}

let options = fs.readFileSync('./cookies.txt', 'utf8').split('\n')

let batch_of_cookies = CookieFactory.create(options)

console.log(batch_of_cookies);

let sugarFreeFoods = CookieFactory.cookieRecommendation('tuesday', batch_of_cookies)

console.log('sugar free cakes are :');
for (let i = 0; i < sugarFreeFoods.length; i++) {
  console.log(sugarFreeFoods[i].name);
}