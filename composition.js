"use strict"
const fs = require("fs")
var options = fs.readFileSync('cookies.txt', 'utf8').split('\n')

const CookieFactory = require('./CookieFactory')

let batch_of_cookies = CookieFactory.create(options)
console.log(batch_of_cookies);

let sugarFreeFoods = CookieFactory.cookieRecommendation("tuesday", batch_of_cookies);
console.log("sugar free cakes are :");
for (let i = 0; i < sugarFreeFoods.length; i++) {
    console.log(sugarFreeFoods[i].name);
}
