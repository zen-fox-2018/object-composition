"use strict"
const fs = require('fs')
//let data = require('./cookies.txt');
let option =  fs.readFileSync('./cookies.txt', 'utf-8').split('\n')



//let data2 = dataArray.split('\n')


class Ingredient {
    constructor(name,amount) {
        this.name = name
        this.amount = amount
    }
}

class Cookie {
    constructor (name,ing) {
       // console.log('nama saya', ing)
        this.name = name
        this.status = 'mentah'
        this.ingredients = this.getIngredient(ing)
        this.has_Sugar = null
       // console.log(ing)
       this.cekSugar()
    }
   
    get cookieIngredients () {
        return this.ingredients
    }
 

    getIngredient (ing) {
        let result = []
        let tmp = ing.split(',')
        tmp.forEach(array => {
            array = array.split(' : ')
            result.push(new Ingredient (array[1],array[0]))
        })

        return result
    }
    
    cekSugar() {
        console.log()
        this.ingredients.forEach(array =>{
            if(array.name == 'sugar'){
                this.has_Sugar = true
            }
        })
    }
    
   
    bake() {
        this.satus = 'selesai dimasak'
    }
}

class PeanutButter extends Cookie{
    constructor (name,ing) {
        super(name,ing)
        this.Peanut_count = 100
       // this.Ingredient = ing
    }
    
   
}
class ChocolateChip extends Cookie {
    constructor (name,ing) {
        super(name,ing)
        this.name = name
        this.choc_chip_count = 200
    }
  
   
}
class OtherCookie extends Cookie {
    constructor(name,ing) {
        super(name,ing)
        this.name = name
        this.otherCount = 150
    }
}


class CookieFactory {
    static create(option){
        let array = option
        let result = []
        array.forEach(cookie => {
            cookie =  cookie.split(' = ')
           // console.log(`...,` ,cookie[0],`.....`)
            if(cookie[0] == 'peanut butter'){      
                result.push(new PeanutButter(cookie[0],cookie[1]))                         
            }
            if(cookie[0] == 'chocolate chip'){
                result.push(new ChocolateChip(cookie[0],cookie[1]))
            }else {
                result.push(new OtherCookie(cookie[0],cookie[1]))
            }
        })
        return result
    }
    static cookieRecomendation(tuesday,data) {
        console.log(data.ingredients)
        for(let i = 0; i < data.length; i++){
            if(data[i].has_Sugar !== true){
                return data[i].name
            }
           
        }
    }

}

let batch_of_cookies = CookieFactory.create(option)
//console.log()
//console.log(JSON.stringify(batch_of_cookies))
batch_of_cookies.forEach( e => {

  console.log(e);

 })

 let sugarFreeFoods =  CookieFactory.cookieRecomendation("tuesday", batch_of_cookies)
 console.log(sugarFreeFoods)