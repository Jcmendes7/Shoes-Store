const { body } = require('express-validator');
    const loginValidation = [
        body('email').notEmpty().withMessage("Digite um Email")
            .trim(),
        body('password').notEmpty()
            .withMessage("tem que digitar uma senha")
            
    ]

module.exports = loginValidation