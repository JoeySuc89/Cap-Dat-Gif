"use strict";
module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('Memes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      caption: {
        type: Sequelize.STRING
      },
      imageurl: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
<<<<<<< HEAD
  down: function(queryInterface, Sequelize) {
=======
  down: function(queryInterface) {
>>>>>>> 06ed4aa341e98a729b3c4257ed62e44ba33eb23c
    return queryInterface.dropTable("Memes");
  }
};
