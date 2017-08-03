const {
	GraphQLList,
	GraphQLNonNull,
	GraphQLObjectType,
	GraphQLString,
	GraphQLFloat,
	GraphQLBoolean
} = require('graphql')

const fields = require('../type/fields')

module.exports = {
	type: new GraphQLList(
		new GraphQLObjectType({
			name: 'Restaurant',
			fields
		})
	),
	resolve(root, params, context, ast) {
		return []
	}
}
