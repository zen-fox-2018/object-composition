"use strict"
const fs = require('fs')
const data = fs.readFileSync('./ingredient.txt','utf8').split('\n')
console.log(data)


class Ingredient {
        constructor(option) {
            this.name = option['name']
            this.amount = option['amount']
        }
}