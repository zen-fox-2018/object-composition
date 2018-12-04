
const fs = require("fs");
const cookies = require("./composition");
const Ingredients = require("./ingredients")
const PeanutButter = require("./peanut_butter");
const ChocolateChip = require("./chocolate_chip");
const OtherCookie = require("./other_cookie")
const readData = fs.readFileSync("cookies.txt", "utf8");

class CookieFactory {

    static create (options) {
        let result = [];
        let data = options.split("\n");

        data.forEach(element => {

            let splitted = element.split("=");
            let cookie = splitted[0].trim();

            let create = null;

            if(cookie === "peanut butter") {
                create = new PeanutButter(cookie, splitted[1]);
            } else if (cookie === "chocolate chip") {
                create = new ChocolateChip(cookie, splitted[1]);
            } else if (cookie === "chocolate cheese") {
                create = new OtherCookie(cookie, splitted[1]);
            } else if (cookie === "chocolate butter") {
                create = new OtherCookie(cookie, splitted[1]);
            }
            result.push(create);
        });
        return result
    }

    // static cookieRecomendation(day, data) {
    //     data.map(element => {
    //         // console.log(element)

    //     })
    // }
}

let batch_of_cookies = CookieFactory.create(readData);
let recomendation = CookieFactory.cookieRecomendation("Tuesday", batch_of_cookies)
console.log(batch_of_cookies)
// console.log(batch_of_cookies[1])

module.exports = CookieFactory