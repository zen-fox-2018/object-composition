const fs = require ('fs')


const PeanutButter = require ('./PeanutButter.js')
const ChocolateChip = require('./ChocolateChip.js')
const OtherCookie = require('./OtherCookie.js')

class CookieFactory {
    static create(options){
        let batch = []
        

        for (let i = 0; i < options.length; i++){
            let resep = CookieFactory.ingredientProcessor(options[i][1])
            // console.log(resep)
            if(options[i][0] === 'peanut butter') {
                batch.push(new PeanutButter(options[i][0], resep))
            }
            else if (options[i][0] === 'chocolate chip') {
                batch.push(new ChocolateChip(options[i][0], resep))
            }
            else {
                batch.push(new OtherCookie(options[i][0], resep))
            }
        }
        return batch
    }

    static optionCreator() {
        let option = fs.readFileSync('./cookies.txt','utf-8').split('\n')
        let nextOption = []
        for (let i = 0; i < option.length; i++){
            nextOption.push(option[i].split(' = '))
        }
        return nextOption
    }

    static ingredientProcessor(string) {
        let result = []
        let stringKoma = string.split(', ')
        for (let i = 0; i < stringKoma.length; i++){
            let stringTitikDua = stringKoma[i].split(" : ")
            result.push(stringTitikDua)
            
        }
        // return result
        let objekResult = []
        for (let i = 0; i < result.length; i++) {
            let objek = {}
            objek['name'] = result[i][1]
            objek['amount']=result[i][0]
            objekResult.push(objek)
        }
        return objekResult
    }

    static cookieRecomendation(days, array){
        let result = []
        // console.log(array[0].sweets)
        for(let i = 0; i < array.length; i++){
            if(array[i].sweets == false){
                result.push(array[i].nama)
            }
        }
        return result
    }
}

module.exports = CookieFactory