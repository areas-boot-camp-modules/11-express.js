const { Model, DataTypes } = require("sequelize")
const sequelize = require("../config/connection")

class Traveller extends Model {}

Trip.init(
  {
    trip_budget: {
      type: DataTypes.INTEGER,
    },
    travel_amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    traveller_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "location",
        key: "id",
      }
    },
  },
  {
    sequelize,
    modelName: "trip"
  },
)


module.exports = Trip
