
const Ingredients = require("./ingredients");

class Cookie {
    constructor(name, materials) {
        this.name = name
        this.status = "mentah";
        this.ingredients = [];
        this.raw = this.amountIngredients(materials)
    }

    bake() {
        this.status = "selesai dimasak"
    }
    amountIngredients(materials) {
        debugger;
        console.log(materials)
    }
}

let test = new Cookie()

// test.amountIngredients()

module.exports = Cookie