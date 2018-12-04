
class Cookie {
    constructor() {
        this.name = ''
        this.status = "mentah"
        this.ingredients =[]
        this.hasSugar = false
    }
    bake () {
        this.status = "selesai dimasak"
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