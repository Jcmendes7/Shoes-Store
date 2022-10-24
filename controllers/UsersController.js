const fs = require('fs');
const path = require('path');
const userModel = require('../models/modelRegister');

//função para renderizar a pagina de formulário
function viewsForm(req,res) {
    return res.render('registration');
 }

 //função  para criar um objeto de usuário

function createUsers(req,res) {
    const {name,email,password,confPassword} = req.body
    userModel.create(name,email,password,confPassword)
    res.redirect('/');
 }

//função para editar Usuário
 function editarUser(req,res) {
   const {id} = req.params;
   const user = userModel.getById(id)
   console.log(user)
   return res.render('editUser',{user})
 }

 function updateById(req,res) {
     const {id} = req.params;
     console.log(id)
    const {name,email,password,confPassword} = req.body
    
    console.log(req.body)
    userModel.update(id,name,email,password,confPassword)
     
 }

//module para exportar as funções
 module.exports = {
     viewsForm,
     createUsers,
     editarUser,
     updateById,
 }