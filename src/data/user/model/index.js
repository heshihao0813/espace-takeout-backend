const jwt = require('jsonwebtoken')

const { JWT_SECRET, JWT_EXPIRY } = require('config')
const User = require('./model')

const generateToken = user =>
  jwt.sign(
    {
      _id: user._id
    },
    JWT_SECRET,
    {
      expiresIn: JWT_EXPIRY
    }
  )

const model = {
  async register ({ username, password }) {
    const user = new User({
      username,
      password,
      displayName: username
    })

    try {
      await user.save()
      return {
        username: user.username,
        token: generateToken(user)
      }
    } catch (err) {
      return err
    }
  },

  async login ({ username, password }, context) {
    const user = await User.findOne({
      username
    })
    if (!user) {
      return new Error('Authentication failed. User not found.')
    }

    const authed = await user.authenticate(password)
    if (!authed) {
      return new Error('Authentication failed. Wrong password.')
    }

    return {
      username: user.username,
      token: generateToken(user)
    }
  },

  // Reserved
  logout (context) {}
}

module.exports = model
