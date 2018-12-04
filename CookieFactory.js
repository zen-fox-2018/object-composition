const fs = require(`fs`)
let Ingredient = require(`./Ingredient`)
let ChocolateChip = require(`./ChocolateChip`)
let PeanutButter = require(`./PeanutButter`)
let OtherCookie = require(`./OtherCookie`)
let PeanutButterCrumbled = require(`./PeanutButterCrumbled`)
let ChocolateChipCrumbled = require(`./ChocolateChipCrumbled`)
const options = fs.readFileSync(`cookies.txt`, `utf8`)

class CookieFactory {
    static create(options) {
        let cookieList = options.split(`\n`)
        let result = []
        for (let i = 0; i < cookieList.length; i++) {
            let isSugar = false
            let ingredientArr = []
            let split = cookieList[i].split(`=`)
            let ingredients = split[1].split(`,`)

            //MAKE INGREDIENT
            for (let j = 0; j < ingredients.length; j++) {
                ingredients[j] = ingredients[j].split(":")
                let obj = {
                    "name": ingredients[j][1].trim(),
                    "amount": ingredients[j][0].trim()
                }

                if (obj.name == `sugar`) {
                    isSugar = true
                }

                ingredientArr.push(
                    new Ingredient(obj)
                )
            }

            //CETAK COOKIE
            switch (split[0].trim()) {
                case `peanut butter`:
                    result.push(new PeanutButter({
                        name: split[0].trim(),
                        ingredient: ingredientArr,
                        isSugar: isSugar
                    }))
                    break;

                case `chocolate chip`:
                    result.push(new ChocolateChip({
                        name: split[0].trim(),
                        ingredient: ingredientArr,
                        isSugar: isSugar
                    }))
                    break;

                case `chocolate cheese`:
                    result.push(new OtherCookie({
                        name: split[0].trim(),
                        ingredient: ingredientArr,
                        isSugar: isSugar
                    }))
                    break;

                case `chocolate butter`:
                    result.push(new OtherCookie({
                        name: split[0].trim(),
                        ingredient: ingredientArr,
                        isSugar: isSugar
                    }))
                    break;
                
                case `peanut butter crumbled`:
                    result.push(new PeanutButterCrumbled({
                        name: split[0].trim(),
                        ingredient: ingredientArr,
                        isSugar: isSugar
                    }))
                    break;
                
                case `chocolate chip crumbled`:
                    result.push(new ChocolateChipCrumbled({
                        name: split[0].trim(),
                        ingredient: ingredientArr,
                        isSugar: isSugar
                    }))
                    break;
            }
        }
        return result
    }

    static showRecommendation(list) {
        let data = []
        let recommendation = ''
        for (let i = 0; i < list.length; i++) {
            if (list[i].isSugar == false) {
                data.push(list[i])
            }
        }
        recommendation += `Cookie recommendation adalah:\n`
        data.forEach(element => {
            recommendation += `${element.name}\n `
        });
        return recommendation
    }
}

let batch_of_cookies = CookieFactory.create(options)
let recommendation = CookieFactory.showRecommendation(batch_of_cookies)
console.log(batch_of_cookies);
console.log(recommendation);





