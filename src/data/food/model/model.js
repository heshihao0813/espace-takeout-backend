const mongoose = require('mongoose')

const foodSchema = new mongoose.Schema(
  {
    eleme_id: {
      type: Number,
      unique: true
    },
    name: {
      type: String,
      required: true
    },
    add_date: {
      type: Date,
      default: Date.now
    },
    restaurant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Restaurant'
    },
    flavour: String,
    blacklist: {
      type: Boolean,
      default: false
    }
  },
  {
    collection: 'food'
  }
)

module.exports = mongoose.model('Food', foodSchema)
