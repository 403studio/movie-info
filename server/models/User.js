const Sequelize = require('sequelize')
const MD5 = require('crypto-js/md5')

function hashPassword (user, options) {
  if (user.changed('password')) {
    user.password = MD5(user.password).toString()
  }
}

module.exports = (sequelize, DataTypes) => {
  class Model extends Sequelize.Model {
    comparePassword (password) {
      return this.password === MD5(password).toString()
    }
  }
  Model.init({
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        len: [8, 40]
      }
    }
  },
  {
    hooks: {
      afterValidate: hashPassword
    },
    sequelize,
    modelName: 'User'
  }
  )
  return Model
}
