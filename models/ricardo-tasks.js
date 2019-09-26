module.exports = function(sequelize, DataTypes) {
    var Tasks = sequelize.define("Tasks", {
      TaskId: {
        type: DataTypes.INT,
        primaryKey: true,
        autoIncrement: true
      },
      TaskName: {
          type:DataTypes.TEXT
        },
      Comments: {
          type:DataTypes.TEXT
        },
      Complete: {
          type:DataTypes.BOOLEAN
        },
      ShiftId: {
          type: DataTypes.INT,
          references: {
            model: Shifts,
            key: 'ShiftId'
        }
      }
    });
    return Tasks;
  };
