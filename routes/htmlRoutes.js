var db = require("../models");
var axios = require("axios");

module.exports = function(app) {
  app.get("/", function(req, res) {
    // If the user already has an account send them to the members page

    db.Memes.findAll({}).then(function(data) {
      res.render("index", {
        memes: data
      });
    });
  });

  // Render form.handlebars when /form is hit
  app.get("/form", function(req, res) {
    res.render("form");
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

  app.get("*", function(req, res) {
    res.render("404");
  });
};
