const PeanutButter = require('./composition.js').PeanutButter;
const ChocholateChip = require('./composition.js').ChocholateChip;
const OtherCookie = require('./composition.js').OtherCookie;
const fs = require('fs');
var options = fs.readFileSync('./cookies.txt','utf8').split('\n');
options.pop();

class CookieFactory {
   create(options) {
    var list = this.splitEqual(options);
    console.log(list[1]);
    console.log('==============');
    var result = [];
    for (var i = 0; i < list.length; i=i+2) {
      if (list[i] === 'peanut butter') {
        let peanutButter = new PeanutButter(list[i],list[i+1]);
        result.push(peanutButter);
      }
      else if (list[i] === 'chocolate chip') {
        let chocolate = new ChocholateChip(list[i],list[i+1]);
        result.push(chocolate);
      }
      else {
        let otherCookie = new OtherCookie(list[i],list[i+1]);
        result.push(otherCookie);
      }
    }
    return result;
  }

  splitEqual(list) {
    var result = [];
    for (var i = 0; i < list.length; i++) {
      var cookie = list[i].split(' = ');
      var cookieName = cookie[0];
      result.push(cookieName);
      var cookieIng = cookie[1].split(', ');
      result.push(cookieIng);
    }
    return result;
  }

}

// var cookieRaw = new CookieFactory()
// var cookieList = cookieRaw.create(options);
// console.log(cookieList);
let cookieFactory = new  CookieFactory();
let batch_of_cookies = cookieFactory.create(options);
console.log(batch_of_cookies);
