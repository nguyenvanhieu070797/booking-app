const Sequelize = require('sequelize');
require('dotenv').config();

const host      = process.env.DB_HOST     || 'localhost'
const database  = process.env.DB_NAME     || 'internal-device'
const user      = process.env.DB_USER     || 'postgres'
const password  = process.env.DB_PASS     || ''
const dialect   = process.env.DB_DIALECT  || 'postgres'

const sequelize = new Sequelize(
    database,
    user,
    password, {
        dialect,
        host,
        define: {
            createdAt: false,  // If don't want createdAt
            updatedAt: false,  // If don't want updatedAt
            timestamps: false,
            underscored: true,
            freezeTableName: true,
        },
    });

module.exports = sequelize;
