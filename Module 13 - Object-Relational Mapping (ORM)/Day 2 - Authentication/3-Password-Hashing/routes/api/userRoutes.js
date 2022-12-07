const router = require('express').Router()
const bcrypt = require('bcrypt')
const User = require('../../models/User')

// TODO: Add comments describing the functionality of this `login` route
// Create a POST route at .../login. Looks like this attempts to sign a user in.
router.post("/login", async (req, res) => {
  try {
    // Find user by their email (sent in the POST).
    const userData = await User.findOne({ where: { email: req.body.email } })
    // If not found, return error saying user not found.
    if (!userData) {
      res.status(404).json({ message: 'Login failed. Please try again!' })
      return
    }

    // Compare passwords (what’s sent versus what’s in the db).
    const validPassword = await bcrypt.compare(
      req.body.password,
      userData.password
    )
    // If password’s don’t match, send an error message.
    if (!validPassword) {
      res.status(400).json({ message: 'Login failed. Please try again!' })
      return
    }
    // Else, return a success message (user can sign in).
    res.status(200).json({ message: 'You are now logged in!' })
  // If there’s some other kind of error, send 500 code (internal server error).
  } catch (err) {
    res.status(500).json(err)
  }
})

// Export for user elsewhere.
module.exports = router


// Bonus: How do you persist a login state? With a session token that we give the user, and they can use for other calls. It would expire after a set amount of time.
