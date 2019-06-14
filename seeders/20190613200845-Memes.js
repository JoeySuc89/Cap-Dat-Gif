"use strict";

module.exports = {
  up: function(queryInterface) {
    return queryInterface.bulkInsert(
      "Memes",
      [
        {
          caption: "Test 1",
          imageurl:
            "https://thumbs.gfycat.com/AdmirableHighlevelCoqui-small.gif"
        },
        {
          caption: "Test 2",
          imageurl: "https://thumbs.gfycat.com/AnxiousGleamingHarrierhawk.webp"
        },
        {
          caption: "Test 3",
          imageurl:
            "https://thumbs.gfycat.com/HollowUnhappyAfricanparadiseflycatcher.webp"
        }
      ],
      {}
    );
  },

  // eslint-disable-next-line no-unused-vars
  down: function(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Memes", null, {});
  }
};
