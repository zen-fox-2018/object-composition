
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
            let amountOfIngredients = splitted[1];

            let create = null;
            
            if(cookie === "peanut butter") {
                create = new PeanutButter(cookie, amountOfIngredients);
                // console.log(amountOfIngredients, "=======")
            } else if (cookie === "chocolate chip") {
                create = new ChocolateChip(cookie, amountOfIngredients);
            } else if (cookie === "chocolate cheese") {
                create = new OtherCookie(cookie, amountOfIngredients);
            } else if (cookie === "chocolate butter") {
                create = new OtherCookie(cookie, amountOfIngredients);
            }
            result.push(create);
        });
        // console.log(result)
        return result
    }

}

let batch_of_cookies = CookieFactory.create(readData);
console.log(batch_of_cookies)

module.exports = CookieFactory