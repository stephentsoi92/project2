var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

// testing position table
app.post("/api/position/table", function(req, res) {
    db.Positions.create(req.body).then(function(dbPosition) {
    res.json(dbPosition);
    });
});

// testing employees table
app.post("/api/employees/table", function(req, res) {
    db.Employees.create(req.body).then(function(dbEmpTable) {
    res.json(dbEmpTable);
    });
});

app.post("/api/tasks", function(req, res) {
    db.Tasks.create(req.body).then(function(dbTasksTable) {
    res.json(dbTasksTable);
    });
});
  

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};
