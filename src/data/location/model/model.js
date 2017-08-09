const mongoose = require('mongoose')

const locationSchema = new mongoose.Schema(
  {
    address_text: {
      type: String,
      required: true
    },
    longitude: {
      type: Number,
      required: true
    },
    atitude: {
      type: Number,
      required: true
    }
  },
  {
    collection: 'location'
  }
)

module.exports = mongoose.model('Location', locationSchema)
