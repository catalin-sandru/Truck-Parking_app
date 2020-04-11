const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ParkingModel = new Schema({
  title: {
    type: String,
    required: true
  },
  coordonates: {
    type: String,
    required: true
  },
  facilities: {
    type: Array
  },
  extra_info: {
    type: String
  }
})

module.exports = mongoose.model('Parking', ParkingModel);