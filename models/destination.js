const mongoose = require('mongoose');
const cardestinationSchema = mongoose.Schema({
  startdate: {
    type: String,
    required: [true, 'startdate is required']
  },

  enddate: {
    type: String,
    required: [true, 'enddate is required']
  },

  origin: {
    type: String,
    required: [true, 'origin is required']
  },

  destination: {
    type: String,
    required: [true, 'destination is required']
  }
})

const cardestination = mongoose.model('cardestination', cardestinationSchema)

module.exports = cardestination;