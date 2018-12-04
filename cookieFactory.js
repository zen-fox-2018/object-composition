
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
        let cookiesIngredients = []
        let data = options.split("\n");

        data.forEach(element => {

            let splitted = element.split("=");
            let cookie = splitted[0].trim();

            let create = null;
            
            if(cookie === "peanut butter") {
                // console.log(splitted[1])
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

}

let batch_of_cookies = CookieFactory.create(readData);
// console.log(batch_of_cookies)

module.exports = CookieFactory