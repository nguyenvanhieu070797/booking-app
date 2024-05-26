const Sequelize = require('sequelize');
const host = 'localhost'
const database = 'internal-device'

// const user = 'postgres'
// const password = '0905135826'
// const dialect = 'postgres'

const user = 'root'
const password = '@Toikhongbiet97'
const dialect = 'mysql'

const sequelize = new Sequelize(database, user, password, {
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
