'use strict'
const fs = require('fs');
let files = fs.readFileSync('./cookies.txt', 'utf8').split('\n');
const PeanutButter = require('./peanutbutter.js');
const ChocolateChips = require('./chocolatechips.js');
const OtherCookies = require('./othercookies.js');
// let files = `peanut butter = 1 cup: flour, 2 cups (gluten) : sugar, 2 cups : peanut butter, 1 cup : cinnamon, 2 tsp : butter
// chocolate chip = 1 cup : chips, 1 cup : sugar, 2 tsp : butter
// chocolate cheese = 1 cup : flour, 2 cups : sugar, 2 cups : cinnamon, 1 tblsp : butter
// chocolate butter = 1 cup : gluten free flour, 1 cup : flavor adders, 2 tsp : butter`.split('\n');

class CookieFactory {

  constructor() {
    this._cookies = [];
  }

  get cookies() {
    return this._cookies;
  }

  static readFile() {
    let arr = [];
    for (let i = 0; i < files.length; i++) {
      let temp = [files[i].split(' =')];
      arr.push(temp[0]);
    }
    return arr;
  }

  static create(options) {              //karena static jadi ga bisa push ke contructor
    let arr = [];
    for (let i = 0; i < options.length; i++) {
      let ingredientsStr = CookieFactory.forIngredients(options[i][1]);
      // console.log(ingredientsStr, '========');
      if (options[i][0] === 'peanut butter') {
        arr.push(new PeanutButter(options[i][0], ingredientsStr));
      } else if (options[i][0] === 'chocolate chip') {
        arr.push(new ChocolateChips(options[i][0], ingredientsStr)); 
      } else {
        arr.push(new OtherCookies(options[i][0], ingredientsStr));
      }
    }
    return arr;
  }

  static forIngredients(input) {
    input = input.split(',');
    // console.log(input);
  
    let arr = [];
    for (let i = 0; i < input.length; i++) {
      let details = input[i].split(': ');
      arr.push({name: details[1], amount: details[0]});
    }
    return arr;
  }

  static cookieRecommendation(day, input) {
    let arr = [];
    for (let i = 0; i < input.length; i++) {
      // console.log(input[i]);
      if (input[i].has_sugar === false) {
        arr.push(input[i].name);
      }
    }
    console.log(`${day}'s sugar-free cookies of the day: ${arr.join(',')}`);
  }
}

let options = CookieFactory.readFile();
// console.log(options);
let batch_of_cookies = CookieFactory.create(options);
// console.log(batch_of_cookies);
// console.log(CookieFactory.forIngredients());
batch_of_cookies.forEach( e => {
  console.log(e);
});

let sugarFreeFoods = CookieFactory.cookieRecommendation('Tuesday', batch_of_cookies);


module.exports = CookieFactory;
