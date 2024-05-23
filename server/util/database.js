const Sequelize = require('sequelize');
const host = 'localhost'
const database = 'node-complete'
const user = 'postgres'
const password = '0905135826'
const port = '5432'



const sequelize = new Sequelize('internal-device', 'postgres', '0905135826', {
    dialect: 'postgres',
    host: 'localhost',
    define: {
        // If don't want createdAt
        createdAt: false,
        // If don't want updatedAt
        updatedAt: false,
        timestamps: false,
        underscored: true,
        freezeTableName: true,
    },
});

//
// const sequelize = new Sequelize(database, user, password, {
//     host,
//     port,
//     dialect: 'postgres',
//     define: {
//         // If don't want createdAt
//         createdAt: true,
//         // If don't want updatedAt
//         updatedAt: true,
//         timestamps: true
//     },
// })

module.exports = sequelize;
