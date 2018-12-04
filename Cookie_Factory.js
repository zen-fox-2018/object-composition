"use strict"
const fs = require('fs')
//let data = require('./cookies.txt');
let option =  fs.readFileSync('./cookies.txt', 'utf-8').split('\n')


class CookieFactory {
    static create(option){
        let array = option
        let result = []
        array.forEach(cookie => {
           // let obj = {}
            cookie =  cookie.split('=')
            if(cookie[0] === 'peanut butter'){
                
            }
            console.log(cookie[0])
            let ingredient =  cookie[1].split(' , ')
            obj.bahan = ingredient
            console.log(ingredient)
            result.push(obj)
        })
        return result
    }

}
console.log(CookieFactory.create(option))