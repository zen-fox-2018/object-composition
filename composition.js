//release 0
const fs  = require("fs");
// console.log(options)
class Cookies {
    constructor(nama, rawIngre) {
        this.name = nama;
        this.status = "mentah";
        this.ingredients = this.setIngre(rawIngre);
    }

    bake() {
        this.status = "selesai dimasak";
    }

    setIngre(rawIngre) {
        let ingredientsList = [];
        for (let i = 0; i <= rawIngre.length-1; i++) {
            ingredientsList.push(new Ingredients(rawIngre[i]));
        }
        return ingredientsList;
    }
}

class PeanutButter extends Cookies {
    constructor(nama, bahan) {
        super(nama, bahan);
        this.peanut_count = 100;
    }
}

class ChocolateChip extends Cookies {
    constructor(nama, bahan) {
        super(nama, bahan);
        this.choc_chip_count = 200;
    }
}
class OtherCookies extends Cookies {
    constructor(nama, bahan) {
        super(nama, bahan);
        this.choc_chip_count = 150;
    }
}
class Ingredients {
    constructor(input) {
        this.name = input['name'];
        this.amount = input['amount'];
    }
    
}

class CookieFactory {
    static create(options) {
        let convertToArray = options.split("\n");
        let cookie = null;
        let list = [];
        for (let i = 0; i <= convertToArray.length-1; i++) {
            let tempList = convertToArray[i].split("=");
            let bahan = CookieFactory.createIngredientslist(tempList[1]);
            if (tempList[0] === "peanut butter ") {
                cookie = new PeanutButter(tempList[0], bahan);
            } else if (tempList[0] === "chocolate chip ") {
                cookie = new ChocolateChip(tempList[0], bahan);
            } else {
                cookie = new OtherCookies(tempList[0], bahan);
            }
            list.push(cookie);
        }
        return list;
    }

    static readList() {
        let list = fs.readFileSync("object-composition/cookies.txt", "utf-8");
        return list;
    }
    
    static createIngredientslist(ingredients) {
        let arrayList = [];
        let objectList = {};
        let splitComa = ingredients.split(",");
        for (let k = 0; k <= splitComa.length-1; k++) {
            let splitEqualDot = splitComa[k].split(" : ");
            objectList["name"] = splitEqualDot[1];
            objectList["amount"] = splitEqualDot[0];
            arrayList.push({"name" : splitEqualDot[1], "amount" : splitEqualDot[0]});
        }
        return arrayList;
    }
    static cookieRecommendation(day, cookies) {
        let freeSugar = [];

        for (let i = 0; i <= cookies.length-1; i++) {
            let isContainSugar = false;
            let takeCookies = cookies[i].ingredients;
            for (let j = 0; j <= takeCookies.length-1; j++) {
                if (takeCookies[j].name === "sugar") {
                    isContainSugar = true
                }
            }   
            if (isContainSugar === false) {
                freeSugar.push({"name" : cookies[i].name})
            }    
        }
        return freeSugar
    }
}
let options = CookieFactory.readList();
let batch_of_cookies = CookieFactory.create(options);
console.log(batch_of_cookies);

let sugarFreeFoods = CookieFactory.cookieRecommendation("tuesday", batch_of_cookies);
console.log("sugar free cakes are: ");
for (let i = 0; i <= sugarFreeFoods.length-1; i++) {
    console.log(sugarFreeFoods[i].name)
}
