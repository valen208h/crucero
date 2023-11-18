require('express');
const crucero = require('../models/crucero');

//
async function crearCrucero(req,res){
  try{
      await crucero.create({
        idCrucero: req.body.idCrucero,
        descripcionCrucero: req.body.descripcionCrucero,
        fechaInicio: req.body.fechaInicio,
        fechaFinal: req.body.fechaFinal,
        cantidadPasajeros: req.body.cantidadPasajeros,
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
async function listarCrucero(req, res){
  try{
      await crucero.findAll({
          attributes:[
              'idCrucero',
              'descripcionCrucero',
              'fechaInicio',
              'fechaFinal',
              'cantidadPasajeros',
          ],
          order: ['idCrucero']
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
async function actualizarCrucero(req, res){
  try{
      await crucero.update({
        idCrucero: req.body.idCrucero,
        descripcionCrucero: req.body.descripcionCrucero,
        fechaInicio: req.body.fechaInicio,
        fechaFinal: req.body.fechaFinal,
        cantidadPasajeros: req.body.cantidadPasajeros,
    
      },{
          where: {idCrucero: req.params.idCrucero}
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


async function desactivarCrucero(req, res){
  try{
      await crucero.destroy({
          where: {idCrucero: req.params.idCrucero}
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

module.exports = {
  crearCrucero,
  listarCrucero,
  actualizarCrucero,
  desactivarCrucero
};