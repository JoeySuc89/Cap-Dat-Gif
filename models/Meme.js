"use strict";
module.exports = function(sequelize, DataTypes) {
  var Meme = sequelize.define(
    "Meme",
    {
      caption: DataTypes.STRING,
      imageurl: DataTypes.STRING
    },
    {}
  );
  Meme.associate = function() {
    // associations can be defined here
  };
  return Meme;
};
