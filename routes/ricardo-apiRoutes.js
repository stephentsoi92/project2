var db = require("../models");
var sequelize = require('sequelize');

module.exports = function(app) {
  // Get methods
  app.get("/api/positions", function(req, res) {
    db.Positions.findAll({}).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  app.get("/api/employees", function(req, res) {
    db.Employees.findAll({}).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  app.get("/api/shifts", function(req, res) {
    db.Shifts.findAll({}).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  app.get("/api/tasks", function(req, res) {
    db.Tasks.findAll({}).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Create a new example
  app.post("/api/positions", function(req, res) {
    db.Positions.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  app.post("/api/employees", function(req, res) {
    // console.log('from reading request body', req.body);
    db.Employees.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  app.post("/api/tasks", function(req, res) {
    db.Tasks.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  app.post("/api/shifts", function(req, res) {
    db.Shifts.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  app.post("/api/shiftsroster", function(req, res) {
    res.json('Hit the ShiftsRoster route');
  });

  app.delete("/api/tasks/:id", function(req, res) {
    db.Tasks.destroy({ where: { TaskId: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  app.delete("/api/tasks/:id", function(req, res) {
    db.Tasks.destroy({ where: { TaskId: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  app.put("/api/tasks/:id", function(req, res) {
    db.Tasks.update(req.body,
      {
        where: {
          TaskId: req.params.id
        }
    }).then(function(response) {
      res.json(response);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};
