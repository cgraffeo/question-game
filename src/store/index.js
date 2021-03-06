import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import authState from './plugins/authState'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth
  },
  plugins: [authState]
})
