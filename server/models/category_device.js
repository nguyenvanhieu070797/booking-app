const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const CategoryDevice = sequelize.define('categories-devices', {
    category_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    category_code: Sequelize.STRING,
    category_name: Sequelize.STRING,
});

module.exports = CategoryDevice;
