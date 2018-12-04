"use strict"
const fs = require('fs');
const options = fs.readFileSync('./ingredientscookies.txt', "utf8");
const PeanutButter = require("./peanutbutter.js")
const ChocolateChip = require("./chocolatechip.js")
const OtherCookie = require("./othercookie.js")


class CookieFactory {

    // static readFile(file) {

    //     // const data = fs ... 
    //     // return data
    // }

    static create(options){
        let data = options.split(/\n/)
        let readMenu = []
        for(let i = 0; i < data.length; i++) {
            readMenu.push(data[i].split(' = '))
        }
        
        let ingredients = []
        for(let i = 0; i < readMenu.length; i++) {
            ingredients.push(readMenu[i][1].split(', '))
        }
        
        
        let listMenu = []
        for(let i = 0 ; i < readMenu.length; i++) {
            let obj= null
            if(readMenu[i][0] == 'peanut butter'){
                obj = new PeanutButter(ingredients[i])
            }else if (readMenu[i][0] == 'chocolate chip'){
                obj = new ChocolateChip(ingredients[i])
            }else{
                obj = new OtherCookie(readMenu[i][0],ingredients[i])
            }
            listMenu.push(obj)
        }
        
        return listMenu
    }

    static cookieRecomendation (day, input) {
        
        let noSugarFood = []
        for(let i = 0; i < input.length; i++) {
            let sugarCheck = false
            for(let j = 0; j < input[i].ingredients.length; j++) {
                if(input[i].ingredients[j].name === "sugar"){
                    sugarCheck = true
                }
            }
            if(sugarCheck == false){
                noSugarFood.push(input[i])
            }
        }
        return noSugarFood
    }
    
}

let batch_of_cookies = CookieFactory.create(options)
console.log(batch_of_cookies[0]);
let sugarFreeFoods = CookieFactory.cookieRecomendation('tuesday', batch_of_cookies);
console.log ('Sugar free cakes are: ')

for(let i = 0; i < sugarFreeFoods.length; i++) {
    console.log(sugarFreeFoods[i].name)
}


