const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const DeviceImport = sequelize.define('devices-import', {
    device_import_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    total: Sequelize.DOUBLE,
    access: Sequelize.BOOLEAN,
    delete: Sequelize.BOOLEAN,
    description: Sequelize.TEXT,
});

module.exports = DeviceImport;
