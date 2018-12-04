const Cookie = require ('./Cookie.js')

class PeanutButter extends Cookie {
    constructor(nama, ingredients){
        super('peanut butter', ingredients)
        // this.nama = 'peanut butter'
        this.peanut_count = 100
    }
}

module.exports = PeanutButter