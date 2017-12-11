const Terminal = require('./terminal.js').main.terminal

let priceReference = {
  A: {
    price: 2, volume: {
      quantity: 4,
      price: 7}
  },
  B: {
    price: 12
  },
  C: {
    price: 1.25,
    volume: {
      quantity: 6,
      price: 6
    }
  },
  D: {
    price: .15
  }
}

function tester(testString) {
  let splitTest = testString.split('')
  let t = new Terminal(priceReference)
  
  splitTest.forEach(item => t.scan(item))
  return t.total()
}

exports.main = {
  tester: tester
}