const express = require('express');
const router = express.Router();
const usuariocontroller = require('../controllers/usuarioController');

router.post('/crearUsuario', usuariocontroller.crearUsuario);
router.get('/listUsuario', usuariocontroller.listUsuario);
router.put('/actualizarUsuario/:idUsuario', usuariocontroller.actualizarUsuario);
router.delete('/desactivarUsuario/:idUsuario', usuariocontroller.desactivarUsuario);

module.exports = router;