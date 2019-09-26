  module.exports = function(sequelize, DataTypes) {
    var Employees = sequelize.define("Employees", {
      EmployeeId: {
        type: DataTypes.INT,
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
      PositionId: {
        type:DataTypes.INT,
        references: {
          model: Positions,
          key: 'PositionId'
        }
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
    };
    
    return Employees;
  };

