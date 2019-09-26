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
          type:DataTypes.BOOLEAN
        }
    });

    Tasks.associate = function(models) {
      Tasks.hasMany(models.Shifts, {});
    };

    return Tasks;
  };
