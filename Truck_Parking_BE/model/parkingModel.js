const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ParkingModel = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    ref: "regions"
  },
  title: {
    type: String,
    required: true
  },
  coordinates: {
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