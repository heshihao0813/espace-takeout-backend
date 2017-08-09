const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema(
  {
    group: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Group'
    },
    restaurant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Restaurant'
    },
    crew: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User',
          required: true
        },
        foods: [
          {
            info: {
              type: mongoose.Schema.Types.ObjectId,
              ref: 'Food'
            },
            quantity: {
              type: Number,
              required: true,
              default: 1
            },
            price: Number
          }
        ]
      }
    ],
    time: {
      type: Date,
      required: true
    },
    location: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Location'
    },
    payer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    payment: {
      type: Number,
      required: true
    }
  },
  {
    collection: 'order'
  }
)

module.exports = mongoose.model('Restaurant', orderSchema)
