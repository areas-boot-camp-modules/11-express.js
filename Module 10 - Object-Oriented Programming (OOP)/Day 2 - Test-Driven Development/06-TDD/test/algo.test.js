const { TestScheduler } = require("jest");
const Algo = require("../algo");

describe("Algo", () => {

  describe("reverse", () => {
    // Test reverse function.
    test("Does the reverse function reverse a string?", () => {
      const isItReverse = new Algo()
      const result = isItReverse.reverse("Hello")
      expect(result).toEqual("olleH")
    })
  })

  describe("isPalindrome", () => {
    // Test isPalindrome function.
    test("Does the isPalindrome function tell you whether the string is a palindrome?", () => {
      const isItAPalindrone = new Algo()
      const result = isItAPalindrone.isPalindrome("tacocat")
      expect(result).toEqual(true)
    })
  })

  describe("capitalize", () => {
    // Test capitalize function.
    test("Does the capitalize function capitalize a string?", () => {
      const doesItCapitalize = new Algo()
      const result = doesItCapitalize.capitalize("christian")
      expect(result).toEqual("Christian")
    })
  })
  
})
