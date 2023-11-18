const {Sequelize} = require('sequelize');
 
var dataBase = 'baseDatosCruise';
var userName = 'postgres';
var password = 'Umanizales';

const connection = new Sequelize(dataBase, userName, password, {
    host: 'localhost',
    dialect: 'postgres'
});

module.exports = connection;