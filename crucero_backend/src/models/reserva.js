const { Model, DataTypes } = require("sequelize");
const connection = require('../database/connection');
const usuario = require("./usuario");
const camarote =require ("./camarote");
const crucero =require ("./crucero");

class reserva extends Model {}

reserva.init({
    idReserva: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true 
    },
    fechaReserva: {
        type: DataTypes.DATE,
        allowNull: false
    },
    estadoReserva: {
        type: DataTypes.STRING(20),
        allowNull: true
    },
    idUsuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: usuario,
            key: 'idUsuario'
        }
    },
    idCamarote: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: camarote,
            key: 'idCamarote'
        }
    },
    idCrucero: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: crucero,
            key: 'idCrucero'
        }
    }
}, {
    sequelize: connection,
    modelName: 'reserva', 
    paranoid: true,
    deletedAt: 'destroyTime'
});

module.exports = reserva;