const Ingredients = require('./Ingredients')

class Cookie {
  constructor(name, ingredients) {
    this.name = name
    this.status = 'mentah'
    this.has_sugar = false
    this.ingredients = this.addIngredients(ingredients)
  }

  bake() {
    this.status = 'selesai dimasak'
  }

  addIngredients(ingredients) {
    let result = [] 
    let temp = ingredients.map(x => x.split(':'));
    temp.forEach(a => {
      if (a[1].trim() == 'sugar') {
        this.has_sugar = true
        // console.log('masukkkk-------------------------','|', a[1].trim(),'|', a[1])
      }
      result.push(new Ingredients(a[1] , a[0]))
    })
    return result
  }
}
module.exports = Cookie