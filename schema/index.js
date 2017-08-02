const {
	graphql,
	GraphQLSchema,
	GraphQLObjectType,
	GraphQLString
} = require('graphql')

const restaurantType = require('./restaurant')

const schema = new GraphQLSchema({
	query: new GraphQLObjectType({
		name: 'RootQueryType',
		fields: {
			restaurant: {
				type: restaurantType,
				resolve: () => ({
					name: 'hello'
				})
			}
		}
	})
})

module.exports = schema
