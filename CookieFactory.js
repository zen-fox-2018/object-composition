"use-strict"

const {Cookies, PeanutButter, ChocolateChip, OtherCookie, ChocolateChipCrumbled, PeanutButterCrumbled} = require('./Cookies.js')
const fs = require('fs')


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
