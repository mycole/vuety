import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home.vue'
import HelloWorld from '@/views/HelloWorld.vue'
import One from '@/views/One.vue'
import Test1 from '@/views/Test1.vue'
import Test2 from '@/views/Test2.vue'
import Test3 from '@/views/Test3.vue'
import Test4 from '@/views/Test4.vue'
import Test5 from '@/views/Test5.vue'
import Test6 from '@/views/Test6.vue'
import Test7 from '@/views/Test7.vue'
import Main from '@/views/Main.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/Home',
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
  },
  {
  path: '/Test1',
  name: 'Test1',
  component: Test1
},
{
path: '/Test2',
name: 'Test2',
component: Test2
},
{
path: '/Test3',
name: 'Test3',
component: Test3
},
{
path: '/Test4',
name: 'Test4',
component: Test4
}
,
{
path: '/Test5',
name: 'Test5',
component: Test5
},
{
path: '/Test6',
name: 'Test6',
component: Test6
}
,
{
path: '/Test7',
name: 'Test7',
component: Test7
}

  ]
})
