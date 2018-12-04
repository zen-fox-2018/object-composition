"use strict"
const fs = require('fs');
const options = fs.readFileSync('./cookies.txt', 'utf8').split('\n');

class Ingredient {
    constructor(options) {
        this.name = options['name']
        this.amount = options['amount']
    }
}

class Cookie {
    constructor(name, ingredient) {
        this.name = name
        this.ingredients = this.setupIngredients(ingredient);
        this.has_sugar = null;
    }

    setupIngredients(input) {
        let getData = input.split(',')
        let resultIng = [];

        for (let i = 0; i < getData.length; i++) {
            let obj = {}
            obj.name = getData[i].split(':')[1]
            obj.amount = getData[i].split(':')[0]
            resultIng.push(obj)
        }
        return resultIng
    }

}

class CookieFactory {

    static create(cookies) {
        let arrayCookies = [];
        let dataCookies = cookies

        for (let i = 0; i < dataCookies.length; i++) {
            let splitter = dataCookies[i].split(' = ')
            if (splitter[0] === 'peanut butter') {
                let peanutButter = new PeanutButter(splitter[0], splitter[1])
                arrayCookies.push(peanutButter)
            } else if (splitter[0] === 'chocolate chip') {
                let chocolateChip = new ChocolateChip(splitter[0], splitter[1])
                arrayCookies.push(chocolateChip)
            } else {
                let otherCookie = new OtherCookie(splitter[0], splitter[1])
                arrayCookies.push(otherCookie);
            }
        }
        return arrayCookies
    }
}

class PeanutButter extends Cookie {
    constructor(name, ingredients) {
        super(name, ingredients)
        this.peanut_count = 100
    }
}

class ChocolateChip extends Cookie {
    constructor(name, ingredients) {
        super(name, ingredients)
        this.peanut_count = 200
    }
}

class OtherCookie extends Cookie {
    constructor(name, ingredients) {
        super(name, ingredients)
        this.peanut_count = 150
    }
}


var batch_of_cookies = CookieFactory.create(options)
console.log(batch_of_cookies)

// let sugarFreeFoods = CookieFactory.cookieRecommendation("tuesday", batch_of_cookies);
// console.log("sugar free cakes are :")
// for (let i = 0; i < sugarFreeFoods.length; i++) {
//     console.log(sugarFreeFoods[i].name)
// }