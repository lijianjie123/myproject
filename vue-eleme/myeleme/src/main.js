import Vue from 'vue'
import App from './App'
import store from './store/index'
import axios from 'axios'
Vue.prototype.$axios = axios

import './style/mycss.css'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(Mint)


import Router from 'vue-router'  // 引入vue-router 组件
import routes from './router/routers'
Vue.use(Router)
const router = new Router({
  routes
})
Vue.config.productionTip = false

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  store,
  // render: h => h(App),
  components: { App },
  template: '<App/>'
})
// .$mounte('#app')
