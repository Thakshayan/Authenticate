const userController = require('../controllers/userController');

const express = require('express');
const router = express.Router();

const auth =  require('../middlewares/authUser')


router.post('/',userController.createUser);
router.use(auth.ensureLogin)
router.get('/',userController.getUsers);


module.exports = router