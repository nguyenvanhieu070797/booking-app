const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const CategoryDevice = sequelize.define('categories-devices', {
    category_device_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    category_device_code: Sequelize.STRING,
    category_device_name: Sequelize.STRING,
    description: Sequelize.TEXT,
});

module.exports = CategoryDevice;
