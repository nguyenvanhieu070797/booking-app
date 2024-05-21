const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const UserDepartment = sequelize.define('users_departments', {
  user_department_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  delete: Sequelize.BOOLEAN,
  edit: Sequelize.BOOLEAN,
  description: Sequelize.TEXT,
});

module.exports = UserDepartment;
