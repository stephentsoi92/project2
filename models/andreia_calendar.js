module.exports = function(sequelize, DataTypes) {
    var Calendar = sequelize.define("Calendar", {
      CalendarId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      title: {
          type: DataTypes.TEXT
      },
      start:{
        type: DataTypes.DATE
      },
      end:{
        type: DataTypes.DATE
      },
      position: {
          type: DataTypes.TEXT
      },
      phone: {
          type: DataTypes.TEXT
      },
      email: {
          type: DataTypes.TEXT
      },
    });
  
    
    return Calendar;
  };
  
  