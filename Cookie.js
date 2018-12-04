const Ingredient = require ('./Ingredient.js')

class Cookie {
    constructor(nama, ingredients){
        this.nama = nama
        this.status = 'mentah'
        this.ingredients = this.parsingIngredients(ingredients)
        this.sweets = this.isItSweet()
        // console.log(ingredients)
    }

    bake() {
        this.status = 'selesai dimasak'
    }

    parsingIngredients(array) {
        let result = []
        // console.log(array)
        for ( let i = 0; i < array.length; i++) {
            let obj = new Ingredient(array[i])
            // console.log(obj)
            // obj['name'] = array[i][1]
            // obj['amount'] = array[i][0]
            result.push(obj)
        }
        return result
    }

    isItSweet(){
        let result = false
        for (let i = 0; i < this.ingredients.length; i++){
            if(this.ingredients[i].name == 'sugar')
            result = true
        }
        return result

    }

    
}

module.exports = Cookie
