const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const graphqlHTTP = require('express-graphql')

require('./db')
const passport = require('./src/data/user/passport')
const schema = require('./src/data/schema')
const { SERVER_PORT } = require('./config')

const app = express()

app.use(bodyParser.json())
app.use(
  session({
    secret: 'espace takeout',
    saveUninitialized: true,
    resave: true
  })
)
app.use(passport.initialize())
app.use(passport.session())

app.use(
  '/graphiql',
  graphqlHTTP({
    schema: schema,
    pretty: true,
    graphiql: true
  })
)

app.listen(SERVER_PORT, () =>
  console.log(`Listening on port ${SERVER_PORT}...`)
)
