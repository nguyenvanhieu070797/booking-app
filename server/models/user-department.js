const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const UserDepartment = sequelize.define('user_department', {
    user_department_id: {
        type: Sequelize.STRING,
        autoIncrement: false,
        allowNull: false,
        primaryKey: true
    },
    delete: Sequelize.BOOLEAN,
    edit: Sequelize.BOOLEAN,
    description: Sequelize.TEXT,
});

module.exports = UserDepartment;
