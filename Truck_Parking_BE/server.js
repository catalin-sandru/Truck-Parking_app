const express = require('express');
// const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const mongodb_URI = 'mongodb+srv://parkin_app_admin:Admin1234@cluster0-ct83x.mongodb.net/parking_app?retryWrites=true&w=majority';

app.use(express.json());

const ParkingRouter = require('./routes/parkingRoute');
const AuthRouter = require('./routes/authRoute');

const port = process.env.PORT || 5000;

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
})

app.use(ParkingRouter);
app.use(AuthRouter);

app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode;
  const message = error.message;
  const data = error.data;
  res.status(status).json({message, data});
})

mongoose.connect(mongodb_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    app.listen(port, console.log(`server running on port ${port}`));
  })
  .catch(err => console.log(err));