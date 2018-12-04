"use strict"

const fs = require("fs")
const fileOptions = fs.readFileSync('./cookies.txt', 'utf8')

class Ingredient {
    constructor(name, amount) {
        this.name = name
        this.amount = amount
    }
}

class Cookie {
    constructor(cookieName, bahan) {
        this.name = cookieName
        this.status = 'mentah'
        this.ingredients = this.IngredientObjectifier(bahan)
    }

    IngredientObjectifier(bahan){
        let arrBahan = []
        
        for(let i = 0; i < bahan.length; i++){
            arrBahan.push(new Ingredient(bahan[i][1], bahan[i][0]))
        }
        return arrBahan
    }

    bake() {
        this.status = 'selesai dimasak'
    }
}

class PeanutButter extends Cookie {
    constructor(cookieName, bahan) {
        super(cookieName, bahan)
        this.peanut_count = 100
    }
}

class ChocolateChip extends Cookie {
    constructor(cookieName, bahan) {
        super(cookieName, bahan)
        this.choc_chip_count = 100
    }
}

class otherCookie extends Cookie {
    constructor(cookieName, bahan) {
        super(cookieName, bahan)
        this.other_count = 150
    }
}

class CookieFactory {
    static create(options) {
        let arrCookie = []

        for (let prop in options) {
            if (prop === 'peanut butter ') {
                arrCookie.push(new PeanutButter(prop, options[prop]))
            }
            else if (prop == 'chocolate chip ') {
                arrCookie.push(new ChocolateChip(prop, options[prop]))
            }
            else {
                arrCookie.push(new otherCookie(prop, options[prop]))
            }
        }
        return arrCookie
    }

    static parseCookie(fileOptions) {
        let splitLine = fileOptions.split('\r\n')

        let splitCookieIngredients = []
        for (let i = 0; i < splitLine.length; i++) {
            splitCookieIngredients.push(splitLine[i].split('='))
        }

        let splitIngredientsList = []
        for (let i = 0; i < splitCookieIngredients.length; i++) {
            splitIngredientsList.push([splitCookieIngredients[i][0], splitCookieIngredients[i][1].split(',')])
        }

        let objIngredientsAmount = {}
        for (let i = 0; i < splitIngredientsList.length; i++) {
            objIngredientsAmount[splitIngredientsList[i][0]] = splitIngredientsList[i][1]
        }

        let objFinalSplit = {}
        for (let prop in objIngredientsAmount) {
            let arrFinalSplit = []
            for (let i = 0; i < objIngredientsAmount[prop].length; i++) {
                arrFinalSplit.push(objIngredientsAmount[prop][i].split(':'))
            }
            objFinalSplit[prop] = arrFinalSplit
        }

        return objFinalSplit
    }
    

    static cookieRecommendation(day, cookieBatch) {
        let arrSugarFree = []

        for(let i = 0; i < cookieBatch.length; i++){
            let isSugarFree = true
            for(let j = 0; j < cookieBatch[i].ingredients.length; j++){
                if(cookieBatch[i].ingredients[j].name == ' sugar'){
                    isSugarFree = false
                }
            }
            if(isSugarFree){
                arrSugarFree.push(cookieBatch[i].name)
            }
        }

        return arrSugarFree
    }
}


const options = CookieFactory.parseCookie(fileOptions)
// console.log(options);

let batch_of_cookies = CookieFactory.create(options)
// console.log(batch_of_cookies)

let sugarFreeFoods = CookieFactory.cookieRecommendation('tuesday',batch_of_cookies )
console.log('sugar free cakes are :');
for(let i = 0; i < sugarFreeFoods.length; i++){
    console.log(sugarFreeFoods[i]);
}



