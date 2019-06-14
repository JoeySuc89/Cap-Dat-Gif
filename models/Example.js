<<<<<<< HEAD
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Example = sequelize.define('Example', {
    text: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {});
  Example.associate = function(models) {
=======
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
>>>>>>> 06ed4aa341e98a729b3c4257ed62e44ba33eb23c
    // associations can be defined here
  };
  return Example;
};
