const path = require('path')

module.exports = {
  db: {
    database: process.env.DATABASE || 'movie',
    username: 'movie',
    password: 'movie',
    options: {
      host: 'localhost',
      dialect: 'sqlite',
      storage: path.resolve(__dirname, '../db/movie.sqlite'),
      define: {
        underscored: true,
        paranoid: true
      }
    }
  }
}
