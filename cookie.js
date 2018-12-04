class Cookie {
    constructor(name) {
        this.name = name
        this.ingredients = [];
        this.has_sugar = null;
        this.setupIngredient()
    }

    setupIngredient() {
        for (let i = 0; i < ingredients.length; i++) {
            let splitter = ingredients[i].split('=')[0]
            console.log(splitter)
        }
    }
    
}