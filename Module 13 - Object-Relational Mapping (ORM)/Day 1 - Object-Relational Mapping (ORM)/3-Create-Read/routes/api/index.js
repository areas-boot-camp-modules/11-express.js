// Import Express.js’s router function.
const router = require("express").Router()
// Import bookRoutes.
const bookRoutes = require("./bookRoutes")

// Define the root for the books route (/api/books)
router.use('/books', bookRoutes)

// Export
module.exports = router
