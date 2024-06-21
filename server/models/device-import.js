const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const DeviceImport = sequelize.define('device-import', {
    device_import_id: {
        type: Sequelize.STRING,
        autoIncrement: false,
        allowNull: false,
        primaryKey: true
    },
    device_import_name: Sequelize.STRING,
    total: Sequelize.DOUBLE,
    access: Sequelize.BOOLEAN,
    delete: Sequelize.BOOLEAN,
    description: Sequelize.TEXT,
});

module.exports = DeviceImport;
