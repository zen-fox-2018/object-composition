const Ingredients = require("./ingredients.js")

class Cookie {
    constructor(name, ingredients) {
        this.name = name
        this.status = "mentah"
        this.ingredients = []
        this.peanut_count = 0
        this.generateIngredients(ingredients)
    }
    
    generateIngredients(input) {
        for(let i = 0; i <  input.length; i++) {
            let obj= null
            let splitIngredients = input[i].split(': ')
            obj = new Ingredients (splitIngredients[1], splitIngredients[0])
            this.ingredients.push(obj)  
        }
        // return listIngredients
    }
    bake () {
        this.status = "selesai dimasak"
    }
}

module.exports = Cookie