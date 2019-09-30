  module.exports = function(sequelize, DataTypes) {
    var Employees = sequelize.define("Employees", {
      EmployeeId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      FirstName: {
        type:DataTypes.TEXT
      },
      LastName: {
        type:DataTypes.TEXT
      },
      PhoneNumber: {
        type:DataTypes.TEXT
      },
      Email: {
        type:DataTypes.TEXT
      },
      Supervisor: {
        type:DataTypes.BOOLEAN
      }
    });

    Employees.associate = function(models) {
      Employees.belongsTo(models.Positions, {
        foreignKey: {
          allowNull: false
        }
      });

    Employees.associate = function(models) {
      Employees.belongsToMany(models.Shifts, {through: "ShiftsRoster"});
    }
  };

    return Employees;
  };

