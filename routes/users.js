const express = require('express');
const router = express.Router();

const usersController = require('../controllers/UsersController');
const userMiddleware = require('../middlewares/userMiddleware');
const loginMiddleware = require('../middlewares/loginMiddleware');

//rotas


router.get('/cadastrar',usersController.cadastrar);
router.post('/cadastrar',userMiddleware,usersController.createUsers);
router.get('/',usersController.users);
router.get("/login", usersController.login);
router.post("/login",loginMiddleware ,usersController.loginSession);


module.exports = router;