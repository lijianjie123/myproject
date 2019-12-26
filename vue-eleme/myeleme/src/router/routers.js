
// import App from '../App'
import home from '../page/home/home'
import login from '../page/home/login'
import city from '../page/city/city'
import msite from '../page/msite/msite'
import shop from "../page/shop/shop"

import my from '../page/my/my'
import order from '../page/order/order'
import search from '../page/search/search'
// import notfound from '@/components/404'

export default [
  {
    path: '/',
    name: 'home',
    component: home,
  },
  {
    path: '/login',
    name: 'login',
    component: login,
  },
  {
    path: '/city/:id',
    name: 'city',
    component: city,
  },
  {
    path: '/msite/:id',
    name: 'msite',
    component: msite,
    
  },
  {
    path: "/shop/:id", 
    name: "shop",
    component: shop,
  },
  {
    path:'/my',
    name:'my',
    component:my
  },
  {
    path:'/order',
    name:'order',
    component:order
  },
  {
    path:'/search',
    name:'search',
    component:search
  }
]

