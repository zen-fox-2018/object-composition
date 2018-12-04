const fs = require('fs')
const PeanutButter = require('./PeanutButter.js')
const ChocholateChip = require('./ChocholateChip.js')
const OtherCookie = require('./OtherCookie.js')
const Ingredient = require('./Ingredient')

class CookieFactory {
    static create(options) {
        var data = fs.readFileSync(options, "utf-8").split("\n")
        // console.log(data)
        let result = []
        data.forEach(kue => {
            // console.log(kue)
            kue = kue.split(' = ')
            // console.log(kue)
            let namaKue = kue[0]
            let ingredient = kue[1].split(', ')
            // console.log(ingredient)
            let objIngredient = ingredient.map(e => {
                e = e.split(' : ')
                // console.log(e)
                return {name: e[1], amount: e[0]}
               
            })
            console.log(objIngredient)
            let kueIngred = objIngredient.map(e =>{
                return new Ingredient(e)
                //nama objek
            })
            if(namaKue == 'peanut butter'){
                result.push(new PeanutButter(namaKue, kueIngred))
            } else if(namaKue == 'chocolate chips'){
                result.push(new ChocholateChip(namaKue, kueIngred))
            }else{
                result.push(new OtherCookie(namaKue, kueIngred))
            }
            //validasi biasa masukin isi 2 parameter nama dan ingredient
           
        });
        return result
    }
    static cookieRecommendation(hari, batchKue) {
        let hasil =[]
        
        if(hari == 'tuesday'){
            for(let i = 0;i < batchKue.length; i++){
                batchKue[i].checkSugar()
                if(batchKue[i].hasSugar == false){
                    hasil.push(batchKue[i])
                }
            }
        }
        return hasil
    }
}


module.exports = CookieFactory

// [ PeanutButter {
//     name: 'Peanut Butter',
//     status: 'mentah0',
//     ingredients: [ Ingredient {
//         name: 'flour',
//         amount: 1 cup
//     }, Ingredient {
//         name: 's'
//     }]
// }]