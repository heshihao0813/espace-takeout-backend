const { GraphQLObjectType } = require('graphql')

const model = require('../model')
const { username, password, token } = require('../type/fields')

module.exports = {
  type: new GraphQLObjectType({
    name: 'Login',
    fields: {
      username,
      token
    }
  }),
  args: {
    username,
    password
  },
  resolve (root, params, context, ast) {
    return model.login(params, context)
  }
}
