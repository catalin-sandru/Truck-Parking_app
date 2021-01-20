const bcrypt = require('bcrypt');

const User = require('../model/authModel');

const { validationResult } = require('express-validator');

exports.register = async(req, res, next) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    const error = new Error("Validation failed");
    error.statusCode = 422;
    error.data = errors.array();
    throw error
  }

  const { email, password } = req.body;
  try {
    const hassedPassword = await bcrypt.hash(password, 12);
    const user = new User({
      email,
      password: hassedPassword
    });
    await user.save();
    res.status(201).json({ message: "User created successfully" })
  } catch (err) {
    if(!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
}