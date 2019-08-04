import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
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
        { path: 'create', name: 'movie-create', component: () => import('./views/movie/create') },
        { path: 'detail/:id', name: 'movie-detail', component: () => import('./views/movie/detail') },
        { path: 'list', name: 'movie-list', component: () => import('./views/movie/list') }
      ]
    },
    { path: '*', redirect: { name: 'movie-list' } }
  ]
})
