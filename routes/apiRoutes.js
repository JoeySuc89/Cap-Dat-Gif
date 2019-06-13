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
};
