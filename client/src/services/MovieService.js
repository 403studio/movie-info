import request from './index'

export default {
  create (data) {
    return request.post('/movies', data)
  },
  update (id, data) {
    return request.put(`/movies/${id}`, data)
  },
  getById (id) {
    return request.get(`/movies/${id}`)
  }
}
