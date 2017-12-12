class Terminal {
  constructor(PricingInfo) {
    this.prices = PricingInfo
    this.cart = {}
  }

  listPrices() {
    return this.prices
  }

  scan(item) {
    this.cart[item] ? this.cart[item] += 1 : this.cart[item] = 1
  }

  total() {
    let total = 0
    Object.keys(this.cart).forEach(key => {
      let cartQuantity = this.cart[key]
      let item = this.prices[key]
      let volume = item.volume
      
      if (!item.volume || cartQuantity < volume.quantity) {
        total += item.price * cartQuantity
      } else {
        total += (volume.price * Math.floor(cartQuantity/volume.quantity)) + (item.price * (cartQuantity % volume.quantity))
      }
    })
    return "$" + total.toFixed(2)
  }

  clear() {
    this.cart = {}
  }
}

exports.main = {
  terminal: Terminal
}
