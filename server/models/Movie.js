const Sequelize = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Model extends Sequelize.Model { }

  Model.init({
    name: {
      type: DataTypes.STRING
    },
    poster: {
      type: DataTypes.STRING
    }
  },
    {
      sequelize,
      modelName: 'Movie'
    }
  )
  return Model
}
