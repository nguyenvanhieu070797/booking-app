const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const DeviceCount = sequelize.define('device-count', {
    device_count_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    device_count_name: Sequelize.STRING,
    amount_use: Sequelize.DOUBLE,
    delete: Sequelize.BOOLEAN,
    used: Sequelize.BOOLEAN,
    description: Sequelize.TEXT,
});

module.exports = DeviceCount;
