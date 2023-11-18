const { Model, DataTypes } = require("sequelize");
const connection = require('../database/connection');

class usuario extends Model {}

usuario.init({
    idUsuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true 
    },
    nombreUsuario: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    correoUsuario: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    telefonoUsuario: {
        type: DataTypes.STRING(20),
        allowNull: false
    }
}, {
    sequelize: connection,
    modelName: 'usuario', 
    paranoid: true,
    deletedAt: 'destroyTime'
});

module.exports = usuario;