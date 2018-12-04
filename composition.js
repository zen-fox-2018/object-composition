"use strict"

// console.log(options);
// var cookieList = options.split('=');
// console.log(cookieList);

class Ingredients{
  constructor(fill, name){
    this.name = name;
    this.amount = fill;
  }
}

class Cookie{
  constructor(cookieName, ingredients){
    this.name = cookieName;
    this.status = "mentah";
    this.ingredients = this.ingredientsSplit(ingredients);
  }

  ingredientsSplit(ingredients){
    // console.log(ingredients);
    var result = [];
    for (var i = 0; i < ingredients.length; i++) {
      var ing = ingredients[i].split(' : ');
      // console.log('takaran', ing[0]);
      var obj = new Ingredients(ing[0],ing[1]);
      result.push(obj);
    }
    return result;
  }

  bake(){
    this.status = "selesai dimasak";
  }
}

class PeanutButter extends Cookie {
  constructor(cookieName, ingredients) {
    super(cookieName, ingredients);
    this.name = 'peanut butter';
    this.peanut_count = 100;
  }
}

class ChocholateChip extends Cookie {
  constructor(cookieName, ingredients) {
    super(cookieName, ingredients);
    this.name = 'chocolate chip';
    this.choc_chip_count = 200;
  }
}

class OtherCookie extends Cookie {
  constructor(cookieName,ingredients) {
    super(cookieName, ingredients)
    this.name = cookieName;
    this.other_count = 150;
  }
}

module.exports = {PeanutButter, ChocholateChip, OtherCookie};
