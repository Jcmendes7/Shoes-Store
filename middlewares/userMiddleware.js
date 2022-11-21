const { body } = require('express-validator');
    const validation = [
        body('name').notEmpty()
            .withMessage("O campo nome nao pode ficar vazio").bail()
            .trim(),
        body('email').notEmpty().withMessage("Digite um Email")
            .trim().bail()
            .normalizeEmail().bail()
            .isEmail().withMessage("Digite um email Válido"),
        
        body('password').notEmpty()
            .withMessage("tem que digitar uma senha").bail()
            .isLength({min:8})
            .withMessage("Senha tem que conter no mínimo 8 dígitos").bail()
            .trim()
    ]

module.exports = validation
    
   
