"use strict"
const Ingredient = require('./Ingredient.js');
class ChocolateChipCrumbled {
  constructor (name, ingredients) {
    this.name = name;
    this.status = "mentah";
    this.ingredients = this.makeIngedients(ingredients);
    this.has_sugar = false;
    this.checkSugar();
  }

  bake () {
    this.status = "selesai masak";
  }

  checkSugar() {
    this.ingredients.forEach( e => {
      if(e.name === 'sugar') {
        this.has_sugar = true;
      }
    });
  }

  makeIngedients (ingredients) {
    let tempReceipt = ingredients.split(', ');
    let ingredientsResult = []
    tempReceipt.forEach( e => {
      let ingredient = e.split(' : ');
      ingredientsResult.push(new Ingredient({name : ingredient[1], amount : ingredient[0]}));
    });
    return ingredientsResult;
  }
}

module.exports = ChocolateChipCrumbled;
