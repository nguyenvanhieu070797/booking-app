const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Department = sequelize.define('department', {
    department_id: {
        type: Sequelize.STRING,
        autoIncrement: false,
        allowNull: false,
        primaryKey: true
    },
    department_name: Sequelize.STRING,
    locate: Sequelize.STRING,
    image: Sequelize.STRING,
    description: Sequelize.TEXT,
});

module.exports = Department;
