const ChocolateChipCrumbled = require('./ChocolateChipCrumbled')
const PeanutButterCrumbled = require('./PeantuButterCrumbled')
const PeanutButter = require('./PeantuButter')
const ChocolateChip = require('./ChocolateChip')
const OtherCookie = require('./OtherCookie')

class CookieFactory {
    static create(options) {
        let result = []
        options.forEach(cookie => {
            cookie = cookie.split(' = ')
            let cookieName = cookie[0]
            let cookieIngred = cookie[1]
            if (cookieName === 'peanut butter') {
                result.push(new PeanutButter(cookieName, cookieIngred))
            } else if (cookieName === 'chocolate chip') {
                result.push(new ChocolateChip(cookieName, cookieIngred))
            } else if (cookieName === 'chocolate chip crumbled') {
                result.push(new ChocolateChipCrumbled(cookieName, cookieIngred))
            } else if (cookieName === 'peanut butter crumbled') {
                result.push(new PeanutButterCrumbled(cookieName, cookieIngred))
            } else {
                result.push(new OtherCookie(cookieName, cookieIngred))
            }
        });
        return result
    }

    static cookieRecommendation(day, cookies) {
        if (day === 'tuesday') {
            return cookies.filter(e => e.has_sugar === false)
        }
    }
}

module.exports = CookieFactory