const express = require('express');
const router = express.Router();
const reservacontroller = require('../controllers/reservaController');

router.post('/crearReserva', reservacontroller.crearReserva);
router.get('/listarReserva', reservacontroller.listarReserva);
router.put('/actualizarReserva/:idReserva', reservacontroller.actualizarReserva);
router.delete('/desactivarReserva/:idReserva', reservacontroller.desactivarReserva);

// Consulta
router.get('/obtenerTotalReservasPorUsuario', reservacontroller.obtenerTotalReservasPorUsuario);
const express = require('express');
const router = express.Router();
const reservaController = require('../controllers/reservaController');

router.get('/camarotesConTipo', reservaController.obtenerCamarotesConTipo);

module.exports = router;


