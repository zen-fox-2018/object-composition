const Ingredient = require('./Ingredient')

class Cookie {
    constructor(name , ingredients) {
        this._name = name
        this._status = "mentah"
        this.has_sugar = false
        this._ingredients = this.ingredients(ingredients)
    }
    set status(input) {
        this._status = input
    }
    set Sugar(input) {
        this.has_sugar = input
    }
    bake() {
        this.status = "selesai dimasak"
    }
    
    ingredients(data) {
        let ingredients = []
        let bahanbahan = data.split(",")
        bahanbahan.forEach(bahan => {
            let arraybahan = bahan.split(":")
            let objectbahan = new Ingredient(arraybahan)
            if( arraybahan[1] === "sugar") {
                // console.log("masuk")
                this.Sugar = true
            }
            ingredients.push(objectbahan) 
        });
        return ingredients
    }
}
module.exports = Cookie