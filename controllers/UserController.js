const { User } = require('../database/models')
const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');

async function user(req,res) {
    let user = await User.findAll()
    res.render('users', { user })
};

function registerForm(req,res) {
  return res.render('registration')
}

async function createUser(req,res) {
    const { name,email,password } = req.body;

    const resultValid = validationResult(req);
    
    if(resultValid.errors.length > 0) {
      return res.render('registration', {
        errors: resultValid.mapped(),
        oldData: req.body
      })
    }

    let userExist = await User.findOne({
        where:{
            email: req.body.email
        }
    });

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

      
    createUser = await User.create({
        full_name: name,
        email: email,
        password_: bcrypt.hashSync(password,10)
    })
    return res.redirect('/login')
};


module.exports = {
    user,
    createUser,
    registerForm
}