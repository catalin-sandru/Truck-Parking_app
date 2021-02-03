const router = require('express').Router();
const { body } = require('express-validator');

const AuthController = require('../controller/authController');
const User = require('../model/authModel')

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

module.exports = router;