const { Model, DataTypes } = require("sequelize")

class Traveller extends Model {}

Traveller.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "traveller"
  },
)


module.exports = Traveller