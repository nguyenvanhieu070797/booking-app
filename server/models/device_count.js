const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const DeviceCount = sequelize.define('device-count', {
    device_count_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    amount_use: Sequelize.DOUBLE,
    delete: Sequelize.BOOLEAN,
    used: Sequelize.BOOLEAN,
    description: Sequelize.TEXT,
});

module.exports = DeviceCount;
