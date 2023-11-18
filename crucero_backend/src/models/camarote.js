const { Model, DataTypes } = require("sequelize");
const connection = require('../database/connection');

class camarote extends Model {}

camarote.init({
    idCamarote: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true 
    },
    descripcionCamarote: {
        type: DataTypes.STRING(30),
        allowNull: true
    }
}, {
    sequelize: connection,
    modelName: 'camarote', 
    paranoid: true,
    deletedAt: 'destroyTime'
});

module.exports = camarote;