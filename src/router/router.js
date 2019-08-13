import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import HelloWorld from '@/views/HelloWorld.vue'
import One from '@/views/One.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
    path: '/One',
    name: 'One',
    component: One
  }
  ]
})
