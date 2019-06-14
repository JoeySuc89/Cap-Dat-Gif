"use strict";
module.exports = function(sequelize, DataTypes) {
  var Example = sequelize.define(
    "Example",
    {
      text: DataTypes.STRING
    },
    {}
  );
  Example.associate = function() {
    // associations can be defined here
  };
  return Example;
};
