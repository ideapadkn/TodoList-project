// import Vue from 'vue'
// import Router from 'vue-router'
// import Home from '@/views/Home'

// Vue.use(Router)

// export default new Router({
//   mode: 'history',
//   routes: [
//     {
//       path: '/',
//       name: Home,
//       component: Home
//     },
//     {
//       path: '/todos',
//       component: () => import('./views/Todos.vue')
//     }
//   ]
// })


import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/todos',
    component: () => import('./views/Todos.vue')
  },

]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL)
})

export default router;