import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/home'// 用简写的形式替换原来的形式
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  redirect: '/home'// 强制跳转到home组件
},
{
  path: '/home',
  name: 'Home',
  component: Home
}
  // { // 按需加载
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
