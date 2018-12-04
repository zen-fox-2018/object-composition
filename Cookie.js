const Ingredients = require('./Ingredient.js')
class Cookie {
    constructor(name,ingredients) {
        this.name = name
        this.status = "mentah"
        this.ingredients = this.getIngredients(ingredients)
        this.hasSugar = false
    }
    bake () {
        this.status = "selesai dimasak"
    }
    getIngredients(ingredients) {
        let hasil =[]
        for(let i = 0; i < ingredients.length; i++){
           hasil.push( new Ingredients(ingredients[i]))
        }
        return hasil
    }
    checkSugar(){
        for(let i = 0; i < this.ingredients.length; i++){
            if(this.ingredients[i].name == 'sugar'){
                this.hasSugar = true
            }
        }
        return this
    }

}

module.exports = Cookie