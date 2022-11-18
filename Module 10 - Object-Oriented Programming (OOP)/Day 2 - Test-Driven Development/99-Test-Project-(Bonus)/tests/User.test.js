const User = require("../User")

const username = "christian"
const email = "me@areas.me"
const password = "secret"
const user = new User (username, email, password)

describe("User", () => {
  describe("Intialization", () => {
    test("Should set username and email when creating a new User object.", () => {
      const username = "christian"
      const email = "me@areas.me"
      
      const user = new User(username, email)

      expect(user.username).toBe(username)
      expect(user.email).toBe(email)
    })
  })

})
