const express = require('express');
const router = express.Router();
const camarotecontroller = require('../controllers/camaroteController');

router.post('/crearCamarote', camarotecontroller.crearCamarote);
router.get('/listCamarote', camarotecontroller.listCamarote);
router.put('/actualizarCamarote/:idCamarote', camarotecontroller.actualizarCamarote);
router.delete('/desactivarCamarote/:idCamarote', camarotecontroller.desactivarCamarote);

module.exports = router;