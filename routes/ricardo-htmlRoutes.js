var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // --------------------------------------
  // Load Tasks page
  app.get("/tasks", function(req, res) {
    res.render("tasks")
  });

  // Load by specific task
  app.get("/employers", function(req, res) {
    res.render("employers")
  });

  // Load Shifts page
  app.get("/employee", function(req, res) {
    res.render("employee")
  });

  // Load by specific shift
  app.get("/calendar", function(req, res) {
    res.render("calendar")
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("index");
  });
};