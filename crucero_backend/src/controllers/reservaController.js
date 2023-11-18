require('express');
const camarote = require('../models/camarote');
const crucero = require('../models/crucero');
const reserva = require('../models/reserva');
const usuario = require('../models/usuario');
const Sequelize = require('sequelize');

async function crearReserva(req,res){
  try{
      await reserva.create({
        idReserva: req.body.idReserva,
        fechaReserva: req.body.fechaReserva,
        estadoReserva: req.body.estadoReserva,
        idUsuario: req.body.idUsuario,
        idCamarote: req.body.idCamarote,
        idCrucero: req.body.idCrucero
      }).then(function(data){
          return res.status(200).json({
              data: data
          });
      }).catch(error =>{
          return res.status(400).json({
              error: error
          });
      })
  }
  catch(e){
      console.log(e);
  }
}

async function listarReserva(req, res){
  try{
      await reserva.findAll({
          attributes:[
              'idReserva',
              'fechaReserva',
              'estadoReserva',
              'idUsuario',
              'idCamarote',
              'idCrucero'
          ],
          order: ['idReserva']
      }).then(function(data){
          return res.status(200).json({
              data: data
          });
      }).catch(error =>{
          return res.status(400).json({
              error: error
          });
      })
  }
  catch(e){
      console.log(e)
  }
}

//Update restaurant
async function actualizarReserva(req, res){
  try{
      await reserva.update({
        idReserva: req.body.idReserva,
        fechaReserva: req.body.fechaReserva,
        estadoReserva: req.body.estadoReserva,
        idUsuario: req.body.idUsuario,
        idCamarote: req.body.idCamarote,
        idCrucero: req.body.idCrucero
      },{
          where: {idReserva: req.params.idReserva}
      }).then(function(data){
          return res.status(200).json({
              data: data
          });
      }).catch(error =>{
          return res.status(400).json({
              error: error
          });
      })
  }
  catch(e){
      console.log(e);
  }
}


async function desactivarReserva(req, res){
  try{
      await reserva.destroy({
          where: {idReserva: req.params.idReserva}
      }).then(function(data){
          return res.status(200).json({
              data: data
          });
      }).catch(error =>{
          return res.status(400).json({
              error: error
          });
      })
  }
  catch(e){
      console.log(e);
  }
}

// Consulta
async function obtenerTotalReservasPorUsuario(req, res) {
    try {
      const resultados = await usuario.count({
        attributes: [
          'nombreUsuario',
        ],
        include: [
          {
            model: reserva,
            as: 'reservas',
            attributes: []
          }
        ],
        group: ['nombreUsuario'], 
        order: [[Sequelize.literal('nombreUsuario'), 'DESC']]
      });
      return res.status(200).json({
        data: resultados
      });
    } catch (error) {
      console.error(error); 
      return res.status(400).json({
        error: error.message 
      });
    }
  }

module.exports = {
  crearReserva,
  listarReserva,
  actualizarReserva,
  desactivarReserva,
  obtenerTotalReservasPorUsuario
};
const { Camarote, TipoCamarote } = require('../models');

const obtenerCamarotesConTipo = async (req, res) => {
    try {
        const resultado = await Camarote.findAll({
            attributes: ['nomCama'],
            include: {
                model: TipoCamarote,
                attributes: ['nomTipoCama'],
                where: {
                    idTipoCama: Sequelize.col('Camarote.idTipoCama')
                },
                required: true
            }
        });

        res.status(200).json(resultado);
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
};

module.exports = {
    obtenerCamarotesConTipo
};
