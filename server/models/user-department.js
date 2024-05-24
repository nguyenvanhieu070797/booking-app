const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const UserDepartment = sequelize.define('user_department', {
  user_department_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  user_department_name: Sequelize.STRING,
  delete: Sequelize.BOOLEAN,
  edit: Sequelize.BOOLEAN,
  description: Sequelize.TEXT,
});

module.exports = UserDepartment;
