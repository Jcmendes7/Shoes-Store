const { User } = require('../database/models');
const { bcrypt } = require('bcrypt');
function formLogin(req,res) {
    return res.render('login')
}

async function login(req,res) {
   let { email, password } = req.body;
   let getUserEmail = await User.findOne({
        where: {
            email: email,
        }
    }) 

    if(getUserEmail) {
        let userPassWord = getUserEmail.password_
        console.log(userPassWord)
        // const validPassword = bcrypt.compareSync(password,userPassWord)
        // if(validPassword) {
        //     console.log("logado")
        // }
        // console.log("logado")

        return res.render("login",{
            errors: {
              password: {
                msg: ' Senha incorreta'
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

    
};

module.exports = {
    formLogin,
    login
}