"use strict"
class PeanutButterCrumbled {
  constructor (name, ingredients) {
    this.name = name;
    this.status = "mentah";
    this.ingredients = ingredients;
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
}

module.exports = PeanutButterCrumbled;
