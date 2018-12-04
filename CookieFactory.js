const fs = require('fs')
const PeanutButter = require('./PeanutButter')
const ChocolateChip = require('./ChocolateChip')
const OtherCookie = require('./OtherCookie')

class CookieFactory {

  static readFile(file) {
    return fs.readFileSync(file , 'utf8').split('\n')
  }

  static create(options) {
    let arrCookie = CookieFactory.readFile(options).map(x => x.split('='))
    let cookies = []
   arrCookie.forEach(type => {
     if (type[0] == 'peanut butter ') {
       cookies.push(new PeanutButter(type[0] , type[1].split(',')))
     } else if (type[0] == 'chocolate chip ') {
       cookies.push(new ChocolateChip(type[0], type[1].split(',')))
     } else {
       cookies.push(new OtherCookie(type[0], type[1].split(',')))
     }
   });
    return cookies
  }

  static cookieRecom(day , cookies) {
    let temp = []
    cookies.filter(x => {
      if (x.has_sugar === false ) {
        temp.push(x)
      }
      // console.log(x)
    })
    return temp
  }
}

let batchCookie = CookieFactory.create('cookies.txt')
// console.log(JSON.stringify(batchCookie, null , 2))
// console.log(batchCookie)

let sugarFree = CookieFactory.cookieRecom('tuesday' , batchCookie)
console.log('sugar free foods are: ')
for (let i = 0; i < sugarFree.length; i++) {
  console.log(sugarFree[i].name)
}