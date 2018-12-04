"use strict"

const options = 'cookies.txt'
const CookieFactory = require('./CookieFactory')


let batch_of_cookies = CookieFactory.create(options)
console.log(batch_of_cookies)
// console.log(JSON.parse(JSON.stringify( batch_of_cookies)))
let sugarFreeFoods = CookieFactory.cookieRecommendation('tuesday', batch_of_cookies)
console.log('Sugar free cakes are :')
for(let i = 0; i < sugarFreeFoods.length; i++){
    console.log(sugarFreeFoods[i].name)
}