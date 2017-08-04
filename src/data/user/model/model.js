const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose')

const { genderEnum } = require.main.require('./src/constant/enum')

const userSchema = new mongoose.Schema(
  {
    display_name: String,
    gender: {
      type: String,
      enum: genderEnum,
      required: true
    },
    birthday: Date
  },
  {
    collection: 'user'
  }
)

userSchema.plugin(passportLocalMongoose)
module.exports = mongoose.model('User', userSchema)
