const { User, Role, Permission, Place } = require('../entity')
const { addUserHandler } = require('./inject')

const addUserByNameAndPass = (info) => User.create(info)

const findUserByUsername = (username, attrs) => {
  const query = {
    where: {
      username
    }
  }
  if (attrs) {
    query.attributes = attrs
  }
  return User.findOne(query)
}

const findUserRoleById = (id) => User.findOne({
  attributes: ['id', 'username'],
  where: {
    id
  },
  include: [
    {
      model: Role,
      through: { attributes: [] }
    }
  ]
})

const findUserPermissionsById = (id) => User.findOne({
  attributes: ['id', 'username'],
  where: {
    id
  },
  include: [
    {
      model: Role,
      through: { attributes: [] },
      include: [
        {
          model: Permission,
          through: { attributes: [] }
        }
      ]
    }
  ]
})

const findPlaceById = (id) => User.findOne({
  attributes: ['id', 'username'],
  where: {
    id
  },
  include: [
    {
      model: Place,
      through: { attributes: [] }
    }
  ]
})

module.exports = {
  findUserPermissionsById,
  findUserByUsername,
  addUserByNameAndPass: new Proxy(addUserByNameAndPass, addUserHandler),
  findPlaceById,
  findUserRoleById
}
