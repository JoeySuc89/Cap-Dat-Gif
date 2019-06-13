'use strict';
module.exports = (sequelize, DataTypes) => {
  const Memes = sequelize.define('Memes', {
    caption: DataTypes.STRING,
    imageurl: DataTypes.STRING,
    likes: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    }
  }, {});
  Memes.associate = function(models) {
    // associations can be defined here
  };
  return Memes;
};
