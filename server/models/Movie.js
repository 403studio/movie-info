const Sequelize = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Model extends Sequelize.Model { }

  Model.init({
    name: {
      type: DataTypes.STRING
    },
    year: {
      type: DataTypes.NUMBER
    },
    director: {
      type: DataTypes.STRING
    },
    genre: {
      type: DataTypes.STRING
    },
    poster: {
      type: DataTypes.STRING
    },
    rating: {
      type: DataTypes.STRING
    },
    imdb_id: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.TEXT
    }
  },
  {
    sequelize,
    modelName: 'Movie'
  }
  )
  return Model
}
