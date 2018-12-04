class Cookie {
  constructor(cookieName, ingredients) {
    this.name = cookieName
    this.status = "mentah"
    this.ingredients = ingredients
  }

  bake() {
    this.status = "selesai dimasak"
  }
}

class PeanutButter extends Cookie {
  constructor(cookieName, ingredients) {
    super(cookieName, ingredients)
    this.penaut_count = 100
  }
}

class ChocolateChip extends Cookie {
  constructor(cookieName, ingredients) {
    super(cookieName, ingredients)
    this.choc_chip_count = 200
  }
}

class OtherCookie extends Cookie{
  constructor(cookieName, ingredients) {
    super(cookieName, ingredients)
    this.other_count = 150
  }
}

module.exports = {Cookie, PeanutButter, ChocolateChip, OtherCookie}