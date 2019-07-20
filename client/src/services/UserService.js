import request from './index'

export default {
  async getUserById () {
    const response = await request.get('/users/3')
    return response.data
  }
}
