
class Cookie {
    constructor(ingredients) {
        this.status = "mentah";
        this.bake(ingredients)
        this.ingredients = [];
    }

    bake() {
        this.status = "selesai dimasak"
        // console.log("ini pasti ga masuk")
    }
}

let cookies = new Cookie()

// console.log(cookies.bake())

module.exports = Cookie