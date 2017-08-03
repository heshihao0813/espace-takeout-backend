const { GraphQLSchema, GraphQLObjectType } = require('graphql')

const query = require('./query')

const schema = new GraphQLSchema({
	query: new GraphQLObjectType({
		name: 'Query',
		fields: query
	})
})

module.exports = schema
