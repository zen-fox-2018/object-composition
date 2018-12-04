"use strict"

const CookieFactory = require ('./CookieFactory.js')

let batchCookie = CookieFactory.create(CookieFactory.optionCreator())
// console.log(JSON.stringify(batchCookie))
// console.log(batchCookie)
let sugarFreeFoods = CookieFactory.cookieRecomendation('tuesday', batchCookie)
console.log('sugar free cakes are :')
for(let i = 0; i<sugarFreeFoods.length; i++){
    console.log(sugarFreeFoods)    
}
// console.log(sugarFreeFoods)


// console.log(CookieFactory.ingredientProcessor('1 cup : flour, 2 cups (gluten) : sugar, 2 cups : peanut butter, 1 cup : cinnamon, 2 tsp : butter'))