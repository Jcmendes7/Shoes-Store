let express = require('express');
let multer = require('multer');
let router = express.Router();
let usersController = require('../controllers/UsersController');

router.get('/cadastrar',usersController.viewsForm);
router.post('/cadastrar',usersController.createUsers);
router.get('/:id/editar',usersController.editarUser);
router.put('/:id/editar',usersController.updateById);
module.exports = router;