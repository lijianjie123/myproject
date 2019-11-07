import Vue from 'vue'
import Router from 'vue-router'
import home from '@/page/home/home'
// import home1 from '@/page/home/home1'
import notfound from '@/components/404'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    // {
    //   path: '/home',
    //   name: 'home1',
    //   component: home1
    // }
    {
      path: '*',
      name: '404',
      component: notfound
    },
  ]
})
