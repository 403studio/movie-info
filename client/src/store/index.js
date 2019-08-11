import Vuex from 'vuex'
import Vue from 'vue'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    token: '',
    user: null,
    isUserLogin: false,
    loadingInstance: null
  },
  mutations: {
    setToken (state, token) {
      state.token = token
      if (token) {
        state.isUserLogin = true
      }
    },
    setUser (state, user) {
      state.user = user
    },
    setLoadingInstance (state, loadingInstance) {
      state.loadingInstance = loadingInstance
    }
  },
  actions: {
    setToken ({ commit }, token) {
      commit('setToken', token)
    },
    setUser ({ commit }, user) {
      commit('setUser', user)
    },
    setLoadingInstance ({ commit }, loadingInstance) {
      commit('setLoadingInstance', loadingInstance)
    }
  },
  plugins: [createPersistedState()]
})
export default store
