// Import Express.js’s router function.
const router = require("express").Router()

// Define the root api route.
const apiRoutes = require("./api")
router.use("/api", apiRoutes)

// Export.
module.exports = router
