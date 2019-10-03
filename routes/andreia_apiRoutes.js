var db= require("../models");

module.exports = function(app){

// testing employees table
app.post("/api/calendar", function(req, res) {
    db.Calendar.create(req.body).then(function(dbCalendar) {
    res.json(dbCalendar);
    });
});
app.get("/api/calendar", function(req, res) {
    db.Calendar.findAll({}).then(function(dbCalendar) {
      res.json(dbCalendar);
    });
  });
};


