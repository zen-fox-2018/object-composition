const Ingredients = require('./Ingredients')

class Cookie {
    constructor(name, ingredients) {
        this.name = name
        this.status = 'mentah'
        this.sugar = false
        this.ingredients = this.ingredientLists(ingredients)
    }
    
    bake() {
        this.status = 'selesai dimasak'
    }

    ingredientLists(ingredients) {
        let result = []
        for(let i = 0; i < ingredients.length; i++) {
            if(ingredients[i].split(' : ')[1] === 'sugar') {
                this.sugar = true
            }
            let temp = ingredients[i].split(' : ')
            result.push(new Ingredients(temp[1], temp[0]))
        }
        return result
      }
}

module.exports = Cookie