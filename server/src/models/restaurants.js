module.exports = function (sequelize, DataTypes) {
  var Restaurants = sequelize.define(
    "Restaurants",
    {
      restID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      place_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      place_website: {
        type: DataTypes.STRING,
        allowNull: true
      },
      place_last_visit_date: {
        type: DataTypes.DATEONLY,
        allowNull: false
      },
      place_rank: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {
      timestamps: false
    }
  );
  return Restaurants;
};