module.exports = function(sequelize, DataTypes) {
    var Positions = sequelize.define("Positions", {
      PostionId: {
        type: DataTypes.INT,
        primaryKey = true,
        autoIncrement: true
      },
      PositionName: {
          type: DataTypes.TEXT
      }
    });
    return Positions;
  };
