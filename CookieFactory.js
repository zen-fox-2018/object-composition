"use strict"
const fs = require ('fs');
const options = fs.readFileSync('./cookies.txt','utf-8');
const ChocolateChipCrumbled = require ('./ChocolateChipCrumbled.js');
const PeanutButterCrumbled = require ('./PeanutButterCrumbled.js');
const ChocolateChip = require ('./ChocolateChip.js');
const PeanutButter = require ('./PeanutButter.js');
const OtherCookie = require ('./OtherCookie.js');
const Ingredient = require('./Ingredient.js');

class CookieFactory {
  constructor () {
  }

  static create (options) {
    let optionsList = options.split('\n').slice(0, -1);
    let cookie = null;
    let cookiesList = [];
    optionsList.forEach( e => {
      let list = e.split(' = ');
      let receipt = list[1].split(', ');
      let listIngredients = [];
      receipt.forEach( e => {
        let ingredient = e.split(' : ');
        listIngredients.push(new Ingredient({name : ingredient[1], amount : ingredient[0]}));
      });
      if (list[0] === 'peanut butter') {
        cookie = new PeanutButter(list[0], listIngredients);
      } else if(list[0] === 'chocolate chip') {
        cookie = new ChocolateChip(list[0], listIngredients);
      } else if(list[0] === 'chocolate chip crumbled') {
        cookie = new ChocolateChipCrumbled(list[0], listIngredients);
      } else if(list[0] === 'peanut butter crumbled') {
        cookie = new PeanutButterCrumbled(list[0], listIngredients);
      } else {
        cookie = new OtherCookie(list[0], listIngredients);
      }
      cookiesList.push(cookie);
    });
    return cookiesList;
  }

  static cookieRecommendation(day, cookies) {
    // let listFoods = [];
    // cookies.forEach( e => {
    //   if (day === 'tuesday' && e.has_sugar === false) {
    //     listFoods.push(e);
    //   } else if( day !== 'tuesday'){
    //     listFoods.push(e);
    //   }
    // });
    // return listFoods;

    if (day === 'tuesday') {
      return cookies.filter( e => e.has_sugar === false);
    } else {
      return cookies;
    }
  }
}

module.exports = CookieFactory;
