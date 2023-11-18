const express = require('express');
const router = express.Router();
const crucerocontroller = require('../controllers/cruceroController'); 

router.post('/crearCrucero', crucerocontroller.crearCrucero);
router.get('/listarCrucero', crucerocontroller.listarCrucero);
router.put('/actualizarCrucero/:idCrucero', crucerocontroller.actualizarCrucero);
router.delete('/desactivarCrucero/:idCrucero', crucerocontroller.desactivarCrucero);

module.exports = router;