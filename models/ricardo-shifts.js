module.exports = function(sequelize, DataTypes) {
    var Shifts = sequelize.define("Shifts", {
      ShiftId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      ShiftTime: {
          type: DataTypes.DATE
        }
      });

      Shifts.associate = function(models) {
        Shifts.belongsTo(models.Employees, {
          foreignKey: {
            allowNull: false
          }
        });
      }      
    return Shifts;
  };
