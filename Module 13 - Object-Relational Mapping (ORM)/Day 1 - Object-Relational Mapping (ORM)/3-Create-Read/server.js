// Use .env file for sensitive data, such as db, db user, and db user pw.
require("dotenv").config()

// Import Express.js and routes.
const express = require("express")
const routes = require("./routes")

// Import connection info.
const sequelize = require("./config/connection")

// Init app and declare port.
const app = express()
const PORT = process.env.PORT || 3001

// Declare middleware.
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Declare routes.
app.use(routes)

// Use sequelize for connecting the app to db.
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"))
})
