var fs = require('fs')
var options = fs.readFileSync(`./cookies.txt`, `utf8`).split(`\n`)

class Ingredients {
    constructor(options) {
        this.name = options['name']
        this.amount = options['amount']
    }   
}

class Cookie {
    constructor(name, ingredients) {
        this.name = name
        this.status = 'mentah'
        this.ingredients = this.buatResep(ingredients)
        // this.has_sugar = null
    }

    bake() {
        this.status = 'selesai dimasak'
    }

    buatResep (ingredients) {
        let tempIngredients = ingredients.split(', ')

        for (let i = 0; i < tempIngredients.length; i++) {
            // console.log(tempIngredients[i].split(':'),'--------------');
            tempIngredients[i] = tempIngredients[i].split(': ')
            tempIngredients[i] = new Ingredients({
                'name':tempIngredients[i][1],
                'amount':tempIngredients[i][0]
            })
        }
        // console.log(tempIngredients);
        
        return tempIngredients
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
        this.choc_chip_count = 200
    }
}

class OtherCookie extends Cookie {
    constructor(name, ingredients) {
        super(name, ingredients)
        this.other_count = 150
    }
}

class CookieFactory {
    static create(options) {
        let list = []
        for (let i = 0; i < options.length; i++) {
            // console.log(options[i].split(' = ')[0])
            if (options[i].split(' = ')[0] == 'peanut butter') {
                list.push(new PeanutButter(options[i].split(' = ')[0],options[i].split(' = ')[1]))

            } else if (options[i].split(' = ')[0] == 'chocolate chip') {
                list.push(new ChocolateChip(options[i].split(' = ')[0],options[i].split(' = ')[1]))
            } else {
                list.push(new OtherCookie(options[i].split(' = ')[0],options[i].split(' = ')[1]))
            }
        }
        return list
    }

    static freeSugar() {
        let tempCookieData = this.create(options)
        let freeSugarCookie = []
        let sugarSign = 0
        // console.log('ini data ubek ubek', tempCookieData);
        for(let i=0; i<tempCookieData.length; i++) {
            // console.log(tempCookieData[i].name,'zzzzzzzzzzzzzzzzzzzzzzz');
            // console.log(tempCookieData[i], 'no sugar');
            for (let j = 0; j < tempCookieData[i].ingredients.length; j++) {
                // console.log(tempCookieData[i]);
                
                if(tempCookieData[i].ingredients[j].name === 'sugar') {
                    sugarSign = 1
                }
            }

            if(sugarSign === 1) {
                sugarSign = 0
            } else {
                freeSugarCookie.push(tempCookieData[i])
            }
        }
        console.log(freeSugarCookie);

        return freeSugarCookie
    }

}

let batch_of_cookies = CookieFactory.create(options)
CookieFactory.freeSugar()



// console.log(batch_of_cookies);
