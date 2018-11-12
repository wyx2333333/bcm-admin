/** @format */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginInfo: {
      user: null,
      password: null
    }
  }
})
