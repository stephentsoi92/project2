module.exports = function(sequelize, DataTypes) {
    var Shifts = sequelize.define("Shifts", {
      ShiftId: {
        type: DataTypes.INT,
        primaryKey: true,
        autoIncrement: true
      },
      ShiftTime: {
          type:DataTypes.DATETIME
        },
      EmployeedId: {
          type:DataTypes.INT,
          references: {
              model: Employees,
              key: 'EmployeeId'
          }
        }
    });
    return Shifts;
  };
