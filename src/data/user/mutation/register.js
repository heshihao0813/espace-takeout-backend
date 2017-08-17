const { GraphQLObjectType } = require('graphql')

const model = require('../model/')
const {
  username,
  password,
  displayName,
  gender,
  birthday
} = require('../type/fields')

module.exports = {
  type: new GraphQLObjectType({
    name: 'Register',
    fields: {
      username,
      displayName,
      gender,
      birthday
    }
  }),
  args: {
    username,
    password,
    displayName,
    gender,
    birthday
  },
  resolve (root, params, context, ast) {
    return model.register({
      ...params
    })
  }
}
