var tester = require('../tester.js').main.tester
var assert = require('chai').assert


describe("Test one -- ABCDABAA", function() {
  it('should return a total of $32.40 when it is scanned in that order', function() {
    assert("$32.40", tester("ABCDABAA"))
  })
})

describe("Test two -- CCCCCCC", function() {
  it('should return a total of $7.25 when it is scanned in that order', function() {
    assert("$7.25", tester("CCCCCCC"))
  })
})

describe("Test two -- ABCD", function() {
  it('should return a total of $7.25 when it is scanned in that order', function() {
    assert("$15.40", tester("ABCD"))
  })
})