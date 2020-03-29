module.exports = function (sequelize, DataTypes) {
  var Users = sequelize.define(
    "Users",
    {
      userID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false
      },
      user_email: {
        type: DataTypes.STRING,
        allowNull: false
      },
      pass_word: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: {
            min: {
              args: [8],
              message: "Password must be more than 7 characters."
            }
          }
        }
      }
    },
    {
      timestamps: false
    }
  );
  return Users;
};