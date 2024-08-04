const Sequelize = require('sequelize');
const config = require('./config.js');

const sequelize = new Sequelize(
    config.developer.database,
    config.developer.username,
    config.developer.password,
    {
        host: config.developer.host,
        port: config.developer.port,
        dialect: config.developer.dialect,
        define: {
            createdAt: false,  // If don't want createdAt
            updatedAt: false,  // If don't want updatedAt
            timestamps: false,
            underscored: true,
            freezeTableName: true,
        },
    });

module.exports = sequelize;
