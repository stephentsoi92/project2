var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

    // end point to find one empoyee for an id
    // app.get("/api/employees/:id", function(req, res) {
    //   db.Employees.findOne({
    //     where: {
    //       EmployeeId: req.params.id
    //     }
    //   })
    //     .then(function(dbEmployees) {
    //       res.json(dbEmployees);
    //     });
    // });

// testing position table
app.post("/api/position/table", function(req, res) {
    db.Positions.create(req.body).then(function(dbPosition) {
    res.json(dbPosition);
    });
});

app.post("/api/tasks", function(req, res) {
    db.Tasks.create(req.body).then(function(dbTasksTable) {
    res.json(dbTasksTable);
    });
});
  
// Update an employee by id
app.put("/api/employees/:id", function(req, res) {
  db.Employees.update({
    where: {
      EmployeeId: req.params.id
    }
  })
    .then(function(dbPost) {
      res.json(dbPost);
    });
});

// Delete an employee by id
app.delete("/api/employees/:id", function(req, res) {
  db.Employees.destroy({
    where: {
      EmployeeId: req.params.id
    }
  })
    .then(function(dbPost) {
      res.json(dbPost);
    });
});

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};
