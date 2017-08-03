const express = require('express')
const graphqlHTTP = require('express-graphql')

require('./db')
const { SERVER_PORT } = require('./config')
const schema = require('./src/data/schema')

const app = express()

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
