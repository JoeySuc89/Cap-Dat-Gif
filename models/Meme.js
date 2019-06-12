'use strict';
module.exports = (sequelize, DataTypes) => {
  const Meme = sequelize.define('Meme', {
    caption: DataTypes.STRING,
    imageurl: DataTypes.STRING
  }, {});
  Meme.associate = function(models) {
    // associations can be defined here
  };
  return Meme;
};