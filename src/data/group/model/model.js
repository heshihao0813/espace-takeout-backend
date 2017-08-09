const mongoose = require('mongoose')

const groupSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    users: [
      {
        info: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User',
          required: true
        },
        admin: {
          type: Boolean,
          default: false
        }
      }
    ]
  },
  {
    collection: 'group'
  }
)

module.exports = mongoose.model('Group', groupSchema)
