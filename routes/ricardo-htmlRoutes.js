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
    res.render("tasks.html")
  });

  // Load by specific task
  app.get("/tasks/:id", function(req, res) {
    res.render("tasks.html")
  });

  // Load Shifts page
  app.get("/shifts", function(req, res) {
    res.render("shifts.html")
  });

  // Load by specific shift
  app.get("/shifts/:id", function(req, res) {
    res.render("shifts.html")
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};

