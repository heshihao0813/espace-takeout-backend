const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose')

const { genderEnum } = require('constant/enum')

const userSchema = new mongoose.Schema(
  {
    display_name: String,
    gender: {
      type: String,
      enum: genderEnum,
      required: true
    },
    birthday: Date,
    preference: [
      {
        restaurant: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Restaurant'
        },
        rate: {
          type: Number,
          default: 0,
          min: 0,
          max: 10
        }
      }
    ],
    admin: {
      type: Boolean,
      default: false
    }
  },
  {
    collection: 'user'
  }
)

userSchema.plugin(passportLocalMongoose)
module.exports = mongoose.model('User', userSchema)
