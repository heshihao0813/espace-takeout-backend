const {
	GraphQLNonNull,
	GraphQLObjectType,
	GraphQLString,
	GraphQLFloat
} = require('graphql')

const restaurantType = new GraphQLObjectType({
	name: 'RestaurantType',
	fields: {
		name: {
			type: new GraphQLNonNull(GraphQLString)
		},
		flavour: {
			type: GraphQLString
		},
		location: {
			type: new GraphQLNonNull(GraphQLString)
		},
		distance: {
			type: GraphQLFloat,
			resolve: node => {
				console.log(node)
				return 11.5
			}
		}
	}
})

module.exports = restaurantType
