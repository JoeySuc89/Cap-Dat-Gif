var db = require("../models");
var path = require("path");
var axios = require("axios");
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  // Load index page
  // app.get("/", function(req, res) {
  //   if (true) {
  //     db.Example.findAll({}).then(function(dbExamples) {
  //       res.render("index", {
  //         msg: "Welcome!",
  //         examples: dbExamples
  //       });
  //     });
  //   } else {
  //     res.sendFile(path.join(__dirname, "../public/signup.html"));
  //   }
  // });

  app.get("/login", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  app.get("/", function(req, res) {
    // If the user already has an account send them to the members page

    db.Example.findAll({}).then(function(data) {
      console.log("Findall all funciton hit");
      console.log(data);
      res.render("index", {
        examples: data
      });
    });
  });
  app.get("/generatememe", function(req, res) {
    // If the user already has an account send them to the members page
    res.render("meme");
  });
  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/members.html"));
  });

  app.get("/login", function(req, res) {
    res.render("login");
  });
  app.get("/register", function(req, res) {
    res.render("register");
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  app.get("/memes/:search", function(req, res) {
    axios
      .get(
        "https://api.gfycat.com/v1/gfycats/search?search_text=${req.params.search}"
      )
      .then(function(response) {
        var gifs = response.data.gfycats.map(function(gfycat) {
          return gfycat.gifUrl;
        });
        res.render("searchResults", { results: gifs });
      });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
