'use strict';
module.exports = (sequelize, DataTypes) => {
  const memes = sequelize.define('memes', {
    username: DataTypes.STRING,
    url: DataTypes.STRING,
    likes: DataTypes.INTEGER,
    dislikes: DataTypes.INTEGER,
    memeText: DataTypes.STRING,
    commentText: DataTypes.STRING
  }, {});
  memes.associate = function(models) {
    // associations can be defined here
  };
  return memes;
};