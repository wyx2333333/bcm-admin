/** @format */

import Vue from 'vue'
import Vuex from 'vuex'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import store from './vuex/store'
import axios from './common/http'
import service from './common/service'
import validateRules from './common/validate'
import '../public/icon/iconfont.css'

Vue.use(ElementUI, Vuex, axios)
Vue.prototype.$axios = axios
Vue.prototype.$service = service
Vue.prototype.$validateRules = validateRules
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
