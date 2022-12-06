const userModel = require("../models/modelRegister");
const fs = require('fs');
const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const User = require("../models/modelRegister");

//função que mostra a tela de cadastro
function cadastrar(req,res) {
    res.render('registration')
}

/*Função que cria um novo usuário, recebe uma função create do Model */
function createUsers(req, res) {
    
    const resultValid = validationResult(req);
    
    if(resultValid.errors.length > 0) {
      return res.render('registration', {
        errors: resultValid.mapped(),
        oldData: req.body
      })
    }
    
    let userExist = userModel.findUserByField('email',req.body.email);
    
    if(userExist) {
      return res.render('registration',{
        errors: {
          email: {
            msg: 'Este email já esta cadastrado'
          }
        },
        oldData: req.body
      });
    }
    
    let userToCreate = {
      ...req.body,
      password: bcrypt.hashSync(req.body.password,10),
      confPassword: bcrypt.hashSync(req.body.confPassword,10),
    }

     userModel.create(userToCreate)
    //redireciona para a Home
     res.redirect("/login")
  }


function login(req,res) {
  return res.render('login')
}

function loginSession(req,res) {
  let userLogin = User.findUserByField('email',req.body.email);
  const resultValid = validationResult(req);
  if(resultValid.errors.length > 0) {
    return res.render('login', {
      errors: resultValid.mapped(),
      oldData: req.body
    })
  }

  if(userLogin) {
    let passwordConfirm = bcrypt.compareSync(req.body.password,userLogin.password);
    if(passwordConfirm) {
      delete userLogin.password;
      delete userLogin.confPassword;
      req.session.userLogged = userLogin;

      return res.redirect('/')
    }

    return res.render("login",{
      errors: {
        email: {
          msg: 'Email ou Senha incorretas'
        }
      }
    })
  }

  return res.render("login",{
    errors: {
      email: {
        msg: 'Este email não foi encontrado'
      }
    },
  })
  

}

//module para exportar as funções
module.exports = {
  createUsers,
  login,
  loginSession,
  cadastrar
};
