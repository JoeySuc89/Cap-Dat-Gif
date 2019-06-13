var db = require("../models");

module.exports = function(app) {
  app.post("/api/meme", function(req, res) {
    db.Meme.create({
      imageurl: req.body.imageurl,
      caption: req.body.caption
    }).then(function() {
      res.redirect("/");
    });
  });

  //UPVOTE calling the api for meme getting the unique id then incrementiing "likes" by 1
  app.put("/api/Memelike/:id", function(req, res) {
    console.log(req.params.id);
    db.Meme.findByPk(req.params.id)
      .then(function(Meme) {
        return Meme.increment(["likes"], { by: 1 });
      })
      .then(function(dbMemelike) {
        res.json(dbMemelike);
      });
  });
  //downvote calling the api for meme getting the unique id then incrementiing "dislikes" by 1

  app.put("/api/Memedislike/:id", function(req, res) {
    console.log(req.params.id);
    db.Meme.findByPk(req.params.id)
      .then(function(Meme) {
        return Meme.increment(["dislikes"], { by: 1 });
      })
      .then(function(dbMemedislike) {
        res.json(dbMemedislike);
      });
  });
};
