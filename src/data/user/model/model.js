const bcrypt = require('bcryptjs')
const mongoose = require('mongoose')

const { genderEnum } = require('constant/enum')

const saltRounds = 10

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    admin: {
      type: Boolean,
      default: false
    },
    birthday: Date,
    created: {
      type: Date,
      default: Date.now
    },
    displayName: String,
    email: {
      type: String,
      unique: true,
      sparse: true
    },
    gender: {
      type: String,
      enum: genderEnum
    },
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
    ]
  },
  {
    collection: 'user'
  }
)

userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('passoword')) {
    this.password = await bcrypt.hash(this.password, saltRounds)
  }
  next()
})

userSchema.method('authenticate', function (password) {
  return bcrypt.compare(password, this.password)
})

module.exports = mongoose.model('User', userSchema)
