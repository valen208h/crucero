require('express');
const camarote = require('../models/camarote');

//
async function crearCamarote(req,res){
  try{
      await camarote.create({
        idCamarote: req.body.idCamarote,
        descripcionCamarote: req.body.descripcionCamarote,
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

async function listCamarote(req, res){
  try{
      await camarote.findAll({
          attributes:[
              'idCamarote',
              'descripcionCamarote',
          ],
          order: ['idCamarote']
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

//Update 
async function actualizarCamarote(req, res){
  try{
      await camarote.update({
        idCamarote: req.body.idCamarote,
        descripcionCamarote: req.body.descripcionCamarote,
      },{
          where: {idCamarote: req.params.idCamarote}
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

async function desactivarCamarote(req, res){
  try{
      await camarote.destroy({
          where: {idCamarote: req.params.idCamarote}
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
  crearCamarote,
  listCamarote, 
  actualizarCamarote,
  desactivarCamarote
};