const express = require('express');
const router = express.Router();
const tconoscoController = require('../controllers/TconoscoController');
const tconoscoMiddleware = require('../middlewares/tconoscoMiddleware');
const upload = require('../middlewares/multerMiddleware');

router.get('/trabalheconosco',tconoscoController.tconosco);
router.post('/trabalheconosco',upload.single('curriculo'),tconoscoMiddleware,tconoscoController.tconoscoPost)

module.exports = router