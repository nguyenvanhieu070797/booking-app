const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const User = sequelize.define('user', {
  user_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  user_name: Sequelize.STRING,
  email: Sequelize.STRING,
  password: Sequelize.STRING,
  image: Sequelize.STRING,
  description: Sequelize.TEXT,
});

module.exports = User;
