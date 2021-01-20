const User = require('../model/authModel');

exports.register = async(req, res, next) => {
  const { email, password } = req.body;
  const newUser = new User({
    email, password
  })
  await newUser.save();

  res.status(200).json({
    message: "User added successfully"
  })
}