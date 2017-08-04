const passport = require('passport')
const model = require('./model/model')

// use static authenticate method of model in LocalStrategy
passport.use(model.createStrategy())

// use static serialize and deserialize of model for session support
passport.serializeUser(model.serializeUser())
passport.deserializeUser(model.deserializeUser())

module.exports = passport
