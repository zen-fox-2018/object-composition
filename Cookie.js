class Cookie {
    constructor(name, ingredient, isSugar) {
        this.name = name
        this.status = `mentah`
        this.ingredients = ingredient
        this.isSugar = isSugar
    }

    bake() {
        this.status = `selesai dimasak`
    }

}

module.exports = Cookie