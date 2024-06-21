const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Category = sequelize.define('category', {
    category_id: {
        type: Sequelize.STRING,
        autoIncrement: false,
        allowNull: false,
        primaryKey: true
    },
    category_code: Sequelize.STRING,
    category_name: Sequelize.STRING,
    description: Sequelize.TEXT,
});

module.exports = Category;
