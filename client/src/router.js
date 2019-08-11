import Vue from 'vue'
import Router from 'vue-router'
import store from './store'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: { name: 'movie-list' }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    { path: '/users/login', alias: '/login', name: 'login', component: () => import('./views/user/login.vue') },
    { path: '/users/register', alias: '/register', name: 'register', component: () => import('./views/user/register.vue') },
    {
      path: '/movies',
      component: () => import('./views/layout/movie'),
      children: [
        { path: 'create', name: 'movie-create', component: () => import('./views/movie/create'), meta: { auth: true } },
        { path: 'detail/:id', name: 'movie-detail', component: () => import('./views/movie/detail') },
        { path: 'list', name: 'movie-list', component: () => import('./views/movie/list') }
      ]
    },
    { path: '*', redirect: { name: 'movie-list' } }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some((router) => router.meta.auth)) {
    if (store.state.isUserLogin) {
      next()
    } else {
      // TODO: 提示用户访问的页面需要登录
      next()
    }
  }
  next()
})

export default router
