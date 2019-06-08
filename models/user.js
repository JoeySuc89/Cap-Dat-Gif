// Requiring bcrypt for password hashing. Using the bcrypt-node.js version as the regular bcrypt module
// Sometimes causes errors on Windows machines

var bcrypt = require("bcrypt-nodejs");

// Create the User model
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    // The email cannot be null, and must be proper email before creation
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    // The password cannot be null
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  // Creating a custom method for the User model. This will check if an unhashed password enterd by the user can be compared to the hashed password stored in our database.
  User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };
  // Hooks are automatic methods that run during various phases of the User Model Lifecycle
  // In this case, before a User is created, we will automatically hash their password
  User.beforeCreate(function(user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(), null);
  });
  return User;
};
