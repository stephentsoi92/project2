module.exports = function(sequelize, DataTypes) {
    var Tasks = sequelize.define("Tasks", {
      TaskId: {
        type: DataTypes.INTEGER,
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
          type:DataTypes.BOOLEAN,
          defaultValue: false
        }
    });

    Tasks.associate = function(models) {
      Tasks.belongsToMany(models.Shifts, {through: "TaskAssignment"})
    };

    return Tasks;
  };
