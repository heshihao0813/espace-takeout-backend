const {
	GraphQLList,
	GraphQLNonNull,
	GraphQLObjectType,
	GraphQLString,
	GraphQLFloat,
	GraphQLBoolean
} = require('graphql')

module.exports = {
	id: {
		type: new GraphQLNonNull(GraphQLString)
	},
	name: {
		type: new GraphQLNonNull(GraphQLString)
	},
	flavour: {
		type: GraphQLString
	},
	blacklist: {
		type: GraphQLBoolean
	}
}
