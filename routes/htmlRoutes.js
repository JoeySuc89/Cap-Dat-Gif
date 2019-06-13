var db = require("../models");
var path = require("path");
var axios = require("axios");
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  app.get("/login", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  app.get("/", function(req, res) {
    // If the user already has an account send them to the members page

    db.Meme.findAll({}).then(function(data) {
      res.render("index", {
        memes: data
      });
    });
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/members.html"));
  });

  // Render form.handlebars when /form is hit
  app.get("/form", function(req, res) {
    res.render("form");
  });

  // Render login.handlebars when /login is hit
  app.get("/login", function(req, res) {
    res.render("login");
  });

  // Render register.handlebars when /register is hit
  app.get("/register", function(req, res) {
    res.render("register");
  });

  // Search gfycat after user hits search button, render gifs
  app.get("/memes/:search", function(req, res) {
    axios
      .get(
        "https://api.gfycat.com/v1/gfycats/search?search_text=" + req.params.search
      )
      .then(function(response) {
        var gifs = response.data.gfycats.map(function(gfycat) {
          return gfycat.gifUrl;
        });
        res.render("form", { results: gifs });
      });
  });

  // app.get("/meme/:memeId", function(req,res){
  //   db.Meme.findOne({id:req.params.memeId}).then(function(data) {
  //     console.log("FindOne function hit");
  //     console.log(data);
  //     res.render("meme", {
  //       meme: data
  //     });
  //   });
  // });
  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
