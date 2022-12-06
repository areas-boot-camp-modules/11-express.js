// Import sequelize.
const Sequelize = require("sequelize")

// Connect to the MySQL db.
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: "localhost",
    dialect: "mysql",
    port: 3306
  }
)

// Export.
module.exports = sequelize
