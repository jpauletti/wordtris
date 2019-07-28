module.exports = function(sequelize, DataTypes) {
    var HighestScores = sequelize.define("HighestScores", {
        // playerID: DataTypes.INTEGER,
        scorePosition: DataTypes.INTEGER,
        highestScore: DataTypes.INTEGER
    });

    // HighestScores.hasMany(models.Players);

    HighestScores.associate = function (models) {
        HighestScores.hasMany(models.Players, {
            onDelete: "cascade"
        });
    };

    return HighestScores;
};