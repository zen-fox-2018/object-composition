"use strict"
const fs = require("fs")
var options = fs.readFileSync('cookies.txt', 'utf8').split('\n')

class Cookie {
    constructor(name, ingredients) {
        this.name = name
        this.status = "mentah"
        this.ingredients = ingredients
        this.has_sugar = this.checkSugar()
    }

    bake() {
        this.status = "selesai di masak"
    }

    checkSugar() {
        let check = false
        this.ingredients.forEach(e => {
            if (e.name === 'sugar') {
                check = true
            }
        });
        return check
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
        this.choco_chip_count = 200
    }
}

class OtherCookie extends Cookie{
    constructor(name, ingredients) {
        super(name, ingredients)
        this.other_count = 150
    }
}

class CookieFactory {
    static create(options) {
        let result = []
        options.forEach(cookie => {
            cookie = cookie.split(' = ')
            let cookieName = cookie[0]
            let arrIngred = cookie[1].split(', ')
            let objIngred = arrIngred.map(e => {
                e = e.split(' : ')
                return {name: e[1], amount: e[0]}
            })
            let cookieIngred = objIngred.map(e => {
                return new Ingredients(e)
            });
            if (cookieName === 'peanut butter') {
                result.push(new PeanutButter(cookieName, cookieIngred))
            } else if (cookieName === 'chocolate chip') {
                result.push(new ChocolateChip(cookieName, cookieIngred))
            } else {
                result.push(new OtherCookie(cookieName, cookieIngred))
            }
        });
        return result
    }

    static cookieRecommendation(day, cookies) {
        if (day === 'tuesday') {
            return cookies.filter(e => e.has_sugar === false)
        }
    }
}

class Ingredients {
    constructor(options) {
        this.name = options['name']
        this.amount = options['amount']
    }
}

let batch_of_cookies = CookieFactory.create(options)
console.log(batch_of_cookies);

let sugarFreeFoods = CookieFactory.cookieRecommendation("tuesday", batch_of_cookies);
console.log("sugar free cakes are :");
for (let i = 0; i < sugarFreeFoods.length; i++) {
    console.log(sugarFreeFoods[i].name);
}
