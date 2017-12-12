const tester = require('../tester.js').main.tester
const assert = require('chai').assert


describe("Test one -- ABCDABAA", function() {
  let string = "ABCDABAA"
  let total = "$32.40"
  it(`should return a total of $${total} when it is scanned in that order`, function() {
    assert(total, tester(string))
  })
})

describe("Test two -- CCCCCCC", function() {
  let string = "CCCCCCC"
  let total = "$7.25"
  it(`should return a total of $${total} when it is scanned in that order`, function() {
    assert(total, tester(string))
  })
})

describe("Test two -- ABCD", function() {
  let string = "ABCD"
  let total = "15.40"
  it(`should return a total of $${total} when it is scanned in that order`, function() {
    assert(total, tester(string))
  })
})