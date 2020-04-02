const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const regionSchema = new Schema({
  id: {
    type: Schema.Types.ObjectId,
    // required: true,
  },
  name: {
    type: String,
    required: true
  },
  code: {
    type: String,
    required: true
  },
  parkingItems: []
})

module.exports = mongoose.model('Region', regionSchema);