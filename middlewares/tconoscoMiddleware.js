const { body } = require('express-validator');
const path = require('path');
const validation = [
    body('nome').notEmpty().withMessage("nome vazio")
        .bail().trim(),
    body('email').notEmpty().withMessage("email não pode ficar vazio").bail()
        .trim().bail()
        .normalizeEmail().bail()
        .isEmail().withMessage("digite um email valido"),
    body('telefone').notEmpty()
        .withMessage("Digite um Telefone para contato").trim(),
    body('departamentos').notEmpty().withMessage("Escolha um departamento"),
    body('disponibilidade').notEmpty()
        .withMessage("Qual a sua disponibilidade?"),
    body('contato').notEmpty().withMessage("Como podemos entrar em contato?"),
    body('curriculo').custom((value,{ req }) =>{
        let file = req.file;
        let acceptedExtension = ['.jpg', '.png', '.pdf',];

        if(!file) {
            throw new Error("Precisa escolher um arquivo")
        } else {
            let fileAccepted =  path.extname(file.originalname)
            if(!acceptedExtension.includes(fileAccepted)) {
            throw new Error(`os arquivos precisam se nos formatos ${acceptedExtension.join(', ')}`);
            }
        }
        return true
    })
]

module.exports = validation;