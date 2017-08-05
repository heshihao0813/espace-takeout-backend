const { GraphQLObjectType } = require('graphql')

const model = require('../model')
const fields = require('../type/fields')

module.exports = {
  type: new GraphQLObjectType({
    name: 'Logout',
    fields: {
      username: fields.username
    }
  }),
  resolve (root, params, context, ast) {
    return {
      username: model.logout(context)
    }
  }
}
