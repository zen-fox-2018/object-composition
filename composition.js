"use strict"
const fs = require('fs');
const options = fs.readFileSync('./cookies.txt', "utf8");

class Cookie {
    constructor(name) {
        this.name = name
        this.status = "mentah"
        this.ingredients = []
        this.peanut_count = 0
    }

    bake () {
        this.status = "selesai dimasak"
    }
}

class PeanutButter extends Cookie {
    constructor() {
        super('peanut butter')
        this.peanut_count = 100
    }
}

class ChocolateChip extends Cookie {
    constructor() {
        super('chocolate chip')
        this.choc_chip_count = 200
    }
}

class OtherCookie extends Cookie {
    constructor(name) {
        super(name)
        this.choc_chip_count = 150
    }
}

class CookieFactory {
    static create(options){
        let readMenu = options.split(/\n/)
        let listMenu = []
        for(let i = 0 ; i < readMenu.length; i++) {
            let obj= null
            if(readMenu[i] == 'peanut butter'){
                obj = new PeanutButter(readMenu[i])
            }else if (readMenu[i] == 'chocolate chip'){
                obj = new ChocolateChip(readMenu[i])
            }else{
                obj = new OtherCookie(readMenu[i])
            }
            listMenu.push(obj)
        }
        return listMenu
    }
    
}

let batch_of_cookies = CookieFactory.create(options)
console.log(batch_of_cookies);



