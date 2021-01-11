"use strict"
const fs = require ('fs');
const options = fs.readFileSync('./cookies.txt','utf-8');

const CookieFactory = require('./CookieFactory.js');
const Ingredient = require('./Ingredient.js')
let batch_of_cookies = CookieFactory.create(options);
batch_of_cookies.forEach( e=> console.log(e));

let sugarFreeFoods = CookieFactory.cookieRecommendation('tuesday', batch_of_cookies);
console.log("sugar free cakes are : ");
sugarFreeFoods.forEach( e => {
  console.log(e.name);
});
