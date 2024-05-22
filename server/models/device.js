const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Device = sequelize.define('device', {
    device_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    device_name: Sequelize.STRING,
    image: Sequelize.STRING,
    description: Sequelize.TEXT,
    total: Sequelize.DOUBLE,
    amount_remain: Sequelize.DOUBLE,
    device_code: Sequelize.STRING,
});

module.exports = Device;
