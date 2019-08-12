const { Movie, Sequelize } = require('../models')

module.exports = {
  async create (req, res) {
    try {
      const movie = await Movie.create(req.body)
      res.status(201).send({
        code: 200,
        user: movie.toJSON()
      })
    } catch (error) {
      let err = []
      if (error.errors) {
        error.errors.forEach(validateError => {
          err.push(validateError.message)
        })
      } else {
        err.push('数据保存失败，请稍后再试')
      }
      res.status(400).send({
        code: 400,
        error: err.join('<br/>')
      })
    }
  },
  async update (req, res) {
    try {
      await Movie.update(
        req.body,
        {
          where: {
            id: req.params.id
          }
        }
      )
      res.status(200).send({
        message: '数据更新成功'
      })
    } catch (error) {
      res.status(500).send({
        code: 500,
        error: '数据更新失败'
      })
    }
  },
  async getByid (req, res) {
    try {
      const movie = await Movie.findByPk(req.params.id)
      if (movie) {
        res.status(200).send({
          movie
        })
      } else {
        res.status(400).send({
          code: 400,
          error: '没有找到对应数据'
        })
      }
    } catch (error) {
      res.status(500).send({
        code: 500,
        error: '数据查询失败'
      })
    }
  },
  async getAll (req, res) {
    const Op = Sequelize.Op
    const operators = {}
    let orderBy = 'updatedAt'
    if (req.query.genre) {
      const filter = {
        where: {
          genre: { [Op.like]: `%${req.query.genre}%` }
        }
      }
      Object.assign(operators, filter)
    }
    if (req.query.orderby === 'rating') {
      orderBy = 'rating'
    }
    Object.assign(operators, { order: [[orderBy, 'DESC']] })
    try {
      const movies = await Movie.findAll(operators)
      res.send({
        code: 200,
        movies: movies
      })
    } catch (error) {
      res.status(400).send({
        code: 400,
        error: '没有找到对应数据'
      })
    }
  },
  async delete (req, res) {
    try {
      await Movie.destroy(
        {
          where: {
            id: req.params.id
          }
        }
      )
      res.status(200).send({
        message: '数据删除成功'
      })
    } catch (error) {
      res.status(500).send({
        code: 500,
        error: '数据删除失败'
      })
    }
  }
}
