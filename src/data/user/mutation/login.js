const { GraphQLObjectType } = require('graphql')

const model = require('../model')
const fields = require('../type/fields')

module.exports = {
  type: new GraphQLObjectType({
    name: 'Login',
    fields: {
      username: fields.username
    }
  }),
  args: {
    username: fields.username,
    password: fields.password
  },
  resolve (root, params, context, ast) {
    return model.login({
      ...params,
      req: context
    })
  }
}
