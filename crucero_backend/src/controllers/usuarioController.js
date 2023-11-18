require('express');
const usuario = require('../models/usuario');

//
async function crearUsuario(req,res){
  try{
      await usuario.create({
        idUsuario: req.body.idUsuario,
        nombreUsuario: req.body.nombreUsuario,
        correoUsuario: req.body.correoUsuario,
        telefonoUsuario: req.body.telefonoUsuario,
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

async function listUsuario(req, res){
  try{
      await usuario.findAll({
          attributes:[
              'idUsuario',
              'nombreUsuario',
              'correoUsuario',
              'telefonoUsuario'
          ],
          order: ['idUsuario']
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
async function actualizarUsuario(req, res){
  try{
      await usuario.update({
        idUsuario: req.body.idUsuario,
        nombreUsuario: req.body.nombreUsuario,
        correoUsuario: req.body.correoUsuario,
        telefonoUsuario: req.body.telefonoUsuario,
      },{
          where: {idUsuario: req.params.idUsuario}
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

async function desactivarUsuario(req, res){
  try{
      await usuario.destroy({
          where: {idUsuario: req.params.idUsuario}
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

module.exports ={
  crearUsuario,
  listUsuario,
  actualizarUsuario,
  desactivarUsuario
};
