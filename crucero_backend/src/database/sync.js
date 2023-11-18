// Import models
const connection = require('./connection');
const crucero = require('../models/crucero');
const usuario = require('../models/usuario');
const camarote = require('../models/camarote');
const reserva = require('../models/reserva'); // Agregamos el modelo de Reserva

// Generate foreign keys
usuario.hasMany(camarote, {
    foreignKey: 'idUsuario',
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE'
});
camarote.belongsTo(usuario, {
    foreignKey: 'idUsuario',
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE'
});

crucero.hasMany(camarote, {
    foreignKey: 'idCrucero',
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE'
});
camarote.belongsTo(crucero, {
    foreignKey: 'idCrucero',
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE'
});

usuario.hasMany(reserva, { // Nueva relación con el modelo de Reserva
    foreignKey: 'idUsuario',
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE'
});
reserva.belongsTo(usuario, {
    foreignKey: 'idUsuario',
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE'
});

camarote.hasMany(reserva, { // Nueva relación con el modelo de Reserva
    foreignKey: 'idCamarote',
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE'
});
reserva.belongsTo(camarote, {
    foreignKey: 'idCamarote',
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE'
});

crucero.hasMany(reserva, { // Nueva relación con el modelo de Reserva
    foreignKey: 'idCrucero',
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE'
});
reserva.belongsTo(crucero, {
    foreignKey: 'idCrucero',
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE'
});

// Generate connection
async function sync() {
    await connection.sync({ force: false });
    await connection.authenticate().then(() => {
        console.log('Synchronized database');
    }).catch((error) => {
        console.log('Error synchronizing database' + error);
    });
}

// Call the sync function
sync();