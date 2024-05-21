const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const User = sequelize.define('users', {
  user_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  user_name: Sequelize.STRING,
  email: Sequelize.STRING,
  password: Sequelize.STRING
});

module.exports = User;
