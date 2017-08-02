const express = require('express')
const { graphql } = require('graphql')
const graphqlHTTP = require('express-graphql')

const db = require('./db')
const rootSchema = require('./schema')

const app = express()
const PORT = 3000

app.use(
	'/graphiql',
	graphqlHTTP({
		schema: rootSchema,
		pretty: true,
		graphiql: true
	})
)

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`))
