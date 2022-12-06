const express = require('express');
const router = express.Router();

const usersController = require('../controllers/UsersController');
const userMiddleware = require('../middlewares/userMiddleware');
const loginMiddleware = require('../middlewares/loginMiddleware');
const UserController = require('../controllers/UserController');

//rotas


router.get('/cadastrar',UserController.registerForm);
router.post('/cadastrar',userMiddleware,UserController.createUser);
// router.post("/login",loginMiddleware ,usersController.loginSession);
router.get('/users',UserController.user);


module.exports = router;