const Ingredients = require('./Ingredients')

class Cookie {
    constructor(name, ingredients) {
        this.name = name
        this.status = "mentah"
        this.ingredients = this.obj(ingredients)
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

    obj(ingredients) {
        let arrIngred = ingredients.split(', ')
        let objIngred = arrIngred.map(e => {
            e = e.split(' : ')
            return {name: e[1], amount: e[0]}
        })
        let cookieIngred = objIngred.map(e => {
            return new Ingredients(e)
        });
        return cookieIngred
    }
}

module.exports = Cookie