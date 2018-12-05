
const Ingredients = require("./ingredients");

class Cookie {
    constructor(name, materials) {
        this.name = name
        this.status = "mentah";
        this.ingredients = [];
        this.hasSugar = false
        this.raw = this.amountIngredients(materials)
    }

    bake() {
        this.status = "selesai dimasak"
    }
    amountIngredients(materials) {
        let data = materials.split(",");
        // console.log(data)

        for(let i = 2; i < data.length; i++) {
            let splittedIngredients = data[i].split(":");
            let ingredientObj = {
                name: splittedIngredients[1].trim(),
                amount: splittedIngredients[0].trim()
            }
            this.ingredients.push(new Ingredients(ingredientObj))
        }
        return this.ingredients
    }
}

module.exports = Cookie