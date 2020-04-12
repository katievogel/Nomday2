module.exports = function (sequelize, DataTypes) {
    var Ratings = sequelize.define(
        "Ratings",
        {
            ratingsID: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true
            },
            userID: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            restID: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            place_rank: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            visit_date: {
                type: DataTypes.DATEONLY,
                allowNull: false
            },
            fave_item: {
                type: DataTypes.STRING,
                allowNull: true
            },
            comments: {
                type: DataTypes.STRING,
                allowNull: true
            }
        },
        {
            timestamps: false
        }
    );
    return Ratings;
};