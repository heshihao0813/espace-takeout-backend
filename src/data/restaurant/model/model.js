const mongoose = require('mongoose')

const restaurantSchema = new mongoose.Schema(
  {
    elemeId: {
      type: Number,
      unique: true
    },
    name: {
      type: String,
      required: true
    },
    categories: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category' // TODO
      }
    ],
    addressText: {
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
    },
    addDate: {
      type: Date,
      default: Date.now
    },
    blacklist: {
      type: Boolean,
      default: false
    },
    menu: [
      {
        food: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Food',
          required: true
        },
        price: {
          type: Number,
          required: true
        }
      }
    ]
  },
  {
    collection: 'restaurant'
  }
)

const Restaurant = mongoose.model('Restaurant', restaurantSchema)
Restaurant.on('index', err => err && console.log(err))

module.exports = Restaurant
