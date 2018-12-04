"use strict"
const fs = require('fs');
// const CookieFactory = require ('./factory.js');

class Cookie {
  constructor(name, ingredients) {
    this.name = name;
    this.status = 'mentah';
    this.ingredients = this.detailsIngredients(ingredients);
    // console.log(this.ingredients , '======');
    this.has_sugar = this.sugar(ingredients);
  }

  detailsIngredients(ingredients) {
    let arr = [];
    for (let i = 0; i < ingredients.length; i++) {
      // console.log(ingredients[i], '======');
      arr.push(new Ingredients(ingredients[i]));
    }
    // ingredients.forEach(e => {
    //   arr.push(new Ingredients(e));
    // });
    return arr;
  }

  sugar(ingredients) {
    for (let i = 0; i < ingredients.length; i++) {
      if (ingredients[i].name === 'sugar') {
        return true;
      }
    }
    return false;
  }

  bake() {
    this.status = 'selesai dimasak';
  }
}



class Ingredients {
  constructor(options) {
    this.name = options['name'];
    this.amount = options['amount'];
  } 
}


module.exports = Cookie;

