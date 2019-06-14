var db = require("../models");

module.exports = function(app) {
  app.post("/api/meme", function(req, res) {
    db.Memes.create({
      imageurl: req.body.imageurl,
      caption: req.body.caption
    }).then(function() {
      res.json("/");
    });
  });

  //UPVOTE calling the api for meme getting the unique id then incrementiing "likes" by 1
  app.post("/api/upvote/:id", function(req, res) {
    console.log(req.params.id);
    db.Memes.findByPk(req.params.id)
      .then(function(Memes) {
        return Memes.increment(["likes"], { by: 1 });
      })
      .then(function() {
        res.redirect("/");
      });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.json(dbExample);
    });
  });

  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });
};
