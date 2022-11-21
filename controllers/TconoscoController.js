const { validationResult } = require('express-validator');
const jobsModel = require('../models/JobsModel');

function tconosco(req,res) {
    return res.render('trabalheConosco')
}
function tconoscoPost(req,res) {
  const resultValid = validationResult(req);
  console.log(req.body)
  if(resultValid.errors.length > 0) {
    return res.render('trabalheConosco', {
      errors: resultValid.mapped(),
      oldData: req.body
    })
  }

   let userExist = jobsModel.findUserByField('email',req.body.email);
    
    if(userExist) {
      return res.render('trabalheConosco',{
        errors: {
          email: {
            msg: 'Este email já esta cadastrado'
          }
        },
        oldData: req.body
      });
    }
    let jobsTocreate = {
      ...req.body,
      curriculo: req.file.filename
    }

    jobsModel.create(jobsTocreate)
  
  res.redirect("/")
}

module.exports = {
    tconosco,
    tconoscoPost
}