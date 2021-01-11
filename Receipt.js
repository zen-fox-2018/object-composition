const Ingredient = require('./Ingredient.js');
class Receipt {
  constructor(options) {
    this.receipt = [];
    this.listReceipt(options);
  }

  listReceipt (options) {
    let listReceipt = options.split(', ');
    listReceipt.forEach( e => {
      let ingredient = new Ingredient(e);
      this.receipt.push(ingredient);
    });
  }
}

module.exports = Receipt;

// let receipts = new Receipt('1 cup : flour, 2 cups (gluten) : sugar, 2 cups : peanut butter, 1 cup : cinnamon, 2 tsp : butter')
// console.log(receipts);
