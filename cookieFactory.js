const fs = require('fs')
const PeanutButter = require('./composition').PeanutButter
const ChocolateChip = require('./composition').ChocolateChip
const OtherCookie = require('./composition'). OtherCookie

class CookieFactory {
  static readFile() {
    let splitSamaDengan = []
    const CookiesTxt = fs.readFileSync('./cookies.txt', 'utf-8').split('\n')
    for (let i = 0; i < CookiesTxt.length; i++) {
      let s = CookiesTxt[i].split(' = ');
      splitSamaDengan.push(s)
    }
    return splitSamaDengan
  }

  static splitFile(input) {
    let komposisi = []
    let inputSplit = input.split(', ')
    for (let i = 0; i < inputSplit.length; i++) {
      let splitColon = inputSplit[i].split(' : ')
      let obj = {}
      obj.name = splitColon[1]
      obj.amount = splitColon[0]
      komposisi.push(obj)
    }
    return komposisi
  }

  static create(options) {
    let created = []
    for (let i = 0; i < options.length; i++) {
      if (options[i][0] === 'peanut butter') {
        let peaBut = new PeanutButter(options[i][0], CookieFactory.splitFile(options[i][1]))
        created.push(peaBut) 
      } else if (options[i][0] === 'chocolate chip') {
        let chocChip = new ChocolateChip(options[i][0], CookieFactory.splitFile(options[i][1]))
        created.push(chocChip) 
      } else {
        let cookieName = new OtherCookie(options[i][0], CookieFactory.splitFile(options[i][1]))
        created.push(cookieName)
      }
    }
    return created
  }

  static cookieRecommendation(day, input) {
    let nonSugarized = []
    for (let i = 0; i < input.length; i++) {
      let sugarAdded = false
      for (let j = 0; j < input[i].ingredients.length; j++) {
        if (input[i].ingredients[j].name === 'sugar') {
          sugarAdded = true
        }
      }
      if (!sugarAdded) {
        input[i].has_sugar = false
        if (!input[i].has_sugar) {
          nonSugarized.push(input[i].name)
        }
      }
      else {
        input[i].has_sugar = true
      }
    }
    return nonSugarized
  }
}

let batch_of_cookies = CookieFactory.create(CookieFactory.readFile())
let sugarFreeFoods = CookieFactory.cookieRecommendation('tuesday', batch_of_cookies)

console.log(batch_of_cookies);
console.log('sugar free cakes are: ');
for (let i = 0; i < sugarFreeFoods.length; i++) {
  console.log(sugarFreeFoods[i])
}

module.exports = CookieFactory
