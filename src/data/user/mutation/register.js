const { GraphQLObjectType } = require('graphql')

const model = require('../model/')
const { username, password, token, displayName } = require('../type/fields')

module.exports = {
  type: new GraphQLObjectType({
    name: 'Register',
    fields: {
      username,
      token,
      displayName
    }
  }),
  args: {
    username,
    password
  },
  resolve (root, params, context, ast) {
    return model.register({
      ...params
    })
  }
}
