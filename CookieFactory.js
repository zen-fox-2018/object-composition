"use strict"
const fs = require ('fs');
const options = fs.readFileSync('./cookies.txt','utf-8');
const ChocolateChipCrumbled = require ('./ChocolateChipCrumbled.js');
const PeanutButterCrumbled = require ('./PeanutButterCrumbled.js');
const ChocolateChip = require ('./ChocolateChip.js');
const PeanutButter = require ('./PeanutButter.js');
const OtherCookie = require ('./OtherCookie.js');

class CookieFactory {
  constructor () {
  }

  static create (options) {
    let optionsList = options.split('\n').slice(0, -1);
    let cookie = null;
    let cookiesList = [];
    optionsList.forEach( e => {
      let list = e.split(' = ');
      if (list[0] === 'peanut butter') {
        cookie = new PeanutButter(list[0], list[1]);
      } else if(list[0] === 'chocolate chip') {
        cookie = new ChocolateChip(list[0], list[1]);
      } else if(list[0] === 'chocolate chip crumbled') {
        cookie = new ChocolateChipCrumbled(list[0], list[1]);
      } else if(list[0] === 'peanut butter crumbled') {
        cookie = new PeanutButterCrumbled(list[0], list[1]);
      } else {
        cookie = new OtherCookie(list[0], list[1]);
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
