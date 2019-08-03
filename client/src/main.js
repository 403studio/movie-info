import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/index'
import './plugins/element.js'
import './components'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
