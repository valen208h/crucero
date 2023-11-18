const { Model, DataTypes } = require("sequelize");
const connection = require('../database/connection');

class crucero extends Model{}

crucero.init({
    idCrucero: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true 
    },
    descripcionCrucero: {
        type: DataTypes.STRING(40),
        allowNull: false
    },
    fechaInicio: {
        type: DataTypes.DATE,
        allowNull: false
    },
    fechaFinal: {
        type: DataTypes.DATE,
        allowNull: false
    },
    cantidadPasajeros: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize: connection,
    modelName: 'crucero', 
    paranoid: true,
    deletedAt: 'destroyTime'
});

module.exports = crucero;