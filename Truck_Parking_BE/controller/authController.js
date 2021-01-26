const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../model/authModel');

const { validationResult } = require('express-validator');

exports.register = async (req, res, next) => {
  const errors = validationResult(req);
  const { email, password } = req.body;

  if(!errors.isEmpty()) {
    const error = new Error("Validation failed");
    error.statusCode = 422;
    error.data = errors.array();
    throw error
  }

  const checkEmail = await User.findOne({ email });
  if(checkEmail) {
    return res.status(401).json({message: 'This e-mail is already in use.'})
  }

  try {
    const hassedPassword = await bcrypt.hash(password, 12);
    const user = new User({
      email,
      password: hassedPassword
    });
    await user.save()
      .then(user => {
        return res.status(201).json({ message: "User created successfully", userId: user._id.toString()})
      })
      .catch(err => {
        if(!err.statusCode) {
          err.statusCode = 500;
        }
        next(err);
      });
  } catch (err) {
    if(!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
}

exports.login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if(!user) {
      const error = new Error('A user with this email can not be found. Please check email is corect.');
      error.statusCode = 401;
      throw error;
    }
    const checkPassword = await bcrypt.compare(password, user.password);
    if(!checkPassword) {
      const error = new Error('Incorect password');
      error.statusCode = 401;
      throw error;
    }

    const token = jwt.sign({ 
      email: user.email, 
      userId: user._id.toString()
    }, 'uservalidatorsecretkey', { expiresIn: '1h' });

    res.status(200).json({
      message: 'User logged in successfully',
      user: user._id.toString(),
      token
    })
  } catch (err) {
    if(!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
    return err
  }
}