const OtherCookie = require('./OtherCookie')
const ChocholateChip = require('./ChocholateChip')
const PeanutButter  = require('./PeanutButter')
const ChocolateChipCrumbled = require('./ChocolateChipCrumbled')
const PeanutButterCrumbled = require('./PeanutButterCrumbled')
const fs = require('fs')

class CookieFactory {
    static read() {
        let data = fs.readFileSync("cookies.txt","utf8")
        return data
    }
    static create() {
        let data = CookieFactory.read().split('\n')
        let Cookies = []
        data.forEach(cookie => {
            let datacookie = cookie.split("=")
            // console.log(datacookie)
            let Cookie = null
            if (datacookie[0] == "peanut butter") {
                Cookie = new PeanutButter(datacookie[1])
            } else if (datacookie[0] === "chocolate chip") {
                Cookie = new ChocholateChip(datacookie[1])
            } else if (datacookie[0] === "chocolate chip crumbled") {
                Cookie = new ChocolateChipCrumbled(datacookie[1])
                // console.log(cookie)
            } else if (datacookie[0] === "peanut butter crumbled") {
                Cookie = new PeanutButterCrumbled(datacookie[1])
            }else {
                Cookie = new OtherCookie(datacookie[0],datacookie[1])
            }
            Cookies.push(Cookie)
        })
        return Cookies
    }
    static cookieRecomendation (hari,Cookies) {
        let tray = []
        Cookies.forEach(cookie => {
                if(hari === "Tuesday") {
                    if(cookie.has_sugar === false) {
                        tray.push(cookie)
                    }
                }
            
        })
        return tray
    }
}

module.exports = CookieFactory