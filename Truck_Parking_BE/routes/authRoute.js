const router = require('express').Router();

const AuthController = require('../controller/authController');

router.post('/register', AuthController.register);

module.exports = router;