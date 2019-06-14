"use strict";
module.exports = function(sequelize, DataTypes) {
  var Memes = sequelize.define(
    "Memes",
    {
      caption: DataTypes.STRING,
      imageurl: DataTypes.STRING,
      likes: {
        type: DataTypes.INTEGER,
        defaultValue: 0
      }
    },
    {}
  );
  Memes.associate = function() {
    // associations can be defined here
  };
  return Memes;
};
