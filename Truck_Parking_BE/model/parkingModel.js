const mongoose = require('mongoose');

const Schema = mongoose.Schema();

const ParkingModel = new Schema({
  coordonates: {
    type: String,
    required: true
  },
  facilities: {
    type: Array
  },
  description: {
    type: String
  }
})

module.exports = mongoose.model('Parking', ParkingModel);