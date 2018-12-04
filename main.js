const CookieFactory = require('./CookieFactory')

let batch_of_cookies = CookieFactory.create();
console.log(batch_of_cookies)

let sugarFreeFoods = CookieFactory.cookieRecomendation("Tuesday",batch_of_cookies)
// console.log(sugarFreeFoods)
console.log("sugar free cookies are :")
sugarFreeFoods.forEach(cookie => {
    console.log(cookie._name)
})