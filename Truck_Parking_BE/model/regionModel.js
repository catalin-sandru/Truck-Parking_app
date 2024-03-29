const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const regionSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  code: {
    type: String,
    required: true
  },
  parkingItems: [{
    type: Schema.Types.ObjectId,
    ref: "Parking"
  }]
})

module.exports = mongoose.model('Region', regionSchema);