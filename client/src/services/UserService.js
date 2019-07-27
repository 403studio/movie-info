import request from './index'

export default {
  async getUserById () {
    const response = await request.get('/users/3')
    return response.data
  },
  register (data) {
    return request.post(
      '/users',
      data
    )
  },
  async login (data) {
    const response = await request.post(
      '/users/login',
      data
    )
    return response
  }
}
