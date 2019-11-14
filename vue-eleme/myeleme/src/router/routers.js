
// import App from '../App'
import home from '../page/home/home'
import login from '../page/home/login'
import city from '../page/city/city'
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
  }
]

