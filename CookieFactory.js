const fs = require('fs')
const ChocolateChip = require('./ChocolateChip.js')
const PeanutButter = require('./PeanutButter.js')
const OtherCookie = require('./OtherCookie.js')
const PeanutButterCrumbled = require('./PeanutButterCrumbled.js')
const ChocolateChipCrumbed = require('./ChocolateChipCrumbled.js')

class CookieFactory {
    static create(options) {
        let cookieArr = []
        let name = []
        let ingredients = []
        for(let i = 0; i < options.length; i++) {
            name.push(options[i].split('=').slice(0,1)[0])
            ingredients.push(options[i].split('=').slice(1)[0].trim().split(','))
        }

        for(let i = 0; i < name.length; i++) {
            if(name[i] === 'peanut butter') {
                cookieArr.push(new PeanutButter('peanut butter', ingredients[i]))
            } else if(name[i] === 'chocolate chip') {
                cookieArr.push(new ChocolateChip('chocolate chip', ingredients[i]))
            } else if(name[i] === 'chocolate cheese') {
                cookieArr.push(new OtherCookie('chocolate cheese', ingredients[i]))
                cookieArr.push(new OtherCookie('chocolate butter', ingredients[i]))
            } else if(name[i] === 'peanut butter crumbled') {
                cookieArr.push(new PeanutButterCrumbled('peanut butter crumbled', ingredients[i]))
            } else if(name[i] === 'chocolate chip crumbled') {
                cookieArr.push(new ChocolateChipCrumbed('chocolate chip crumbled', ingredients[i]))
            }
        }
        console.log(cookieArr)
        return cookieArr
    }

    static cookieRecommendation(day, list) {
        let noSugar = []
        if(day === 'tuesday') {
            list.filter(element => {
                if(element.sugar === false) {
                    noSugar.push(element)
                }
            })
        }
        return noSugar
    }
}

let options = fs.readFileSync('cookies.txt', 'utf8').split('\n')


let batch_of_cookies = CookieFactory.create(options)
// console.log(batch_of_cookies[5])

console.log('==========================================')
console.log('=== sugar free cakes are : ' )
console.log('==========================================')
let sugarFreeFoods = CookieFactory.cookieRecommendation('tuesday', batch_of_cookies)
for(let i = 0; i < sugarFreeFoods.length; i++) {
    console.log(`=== ${i+1}. ${sugarFreeFoods[i].name}.`)
}
console.log('==========================================')