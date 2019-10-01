module.exports = function(sequelize, DataTypes) {
  var Positions = sequelize.define("Positions", {
    PositionId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    PositionName: {
        type: DataTypes.TEXT
    }
  });

  Positions.associate = function(models) {
    Positions.hasMany(models.Employees, {});
  };

  return Positions;
};



