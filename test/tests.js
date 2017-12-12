const tester = require('../tester.js').main.tester
const assert = require('chai').assert

let testData = {
  one: {
    string: "ABCDABAA",
    total: "$32.40"
  },
  two: {
    string: "CCCCCCC",
    total: "$7.25"
  },
  three: {
    string: "ABCD",
    total: "$15.40"
  },

}

describe(`Test one -- ${testData.one.string}`, function() {
  it(`should return a total of ${testData.one.total} when it is scanned in that order`, function() {
    assert(testData.one.total, tester(testData.one.string))
  })
})

describe(`Test two -- ${testData.two.string}`, function() {
  it(`should return a total of ${testData.two.total} when it is scanned in that order`, function() {
    assert(testData.two.total, tester(testData.two.string))
  })
})

describe(`Test three -- ${testData.three.string}`, function() {
  it(`should return a total of ${testData.three.total} when it is scanned in that order`, function() {
    assert(testData.three.total, tester(testData.three.string))
  })
})