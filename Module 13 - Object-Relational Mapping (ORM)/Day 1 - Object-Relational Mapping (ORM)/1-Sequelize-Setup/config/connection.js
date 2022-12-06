const Sequelize = require("sequelize")

const sequelize = new Sequelize(
  // Database
  process.env.DB,
  // Database username
  process.env.DB_USER,
  // Database username password
  process.env.DB_PASSWORD,
  {
    host: "localhost",
    dialect: "mysql",
    port: 3306
  }
)

module.exports = sequelize
