const router = require('express').Router();
const { body } = require('express-validator');

const AuthController = require('../controller/authController');
const isAuth = require('../middleware/is-auth');

router.post('/register', [
  body('email')
    .trim()
    .notEmpty()
    .isEmail()
    .normalizeEmail(),
  body('password')
    .trim()
    .notEmpty()
    .isLength({ min: 6 })
], AuthController.register);

router.post('/login', AuthController.login)

router.get('/check-token', isAuth, AuthController.checkToken)

module.exports = router;