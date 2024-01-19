import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/components/HomePage.vue')
    },
    {
      path: '/camera',
      name: 'camera',
      component: () => import('@/components/CameraPage.vue')
    },
    {
      path: '/info',
      name: 'info',
      component: () => import('@/components/InfoPage.vue')
    },
    {
      path: '/post',
      name: 'post',
      component: () => import('@/components/PostPage.vue')
    }
  ]
})
