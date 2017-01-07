import './init'
import Vue from 'vue'
import App from './App.vue'
import Vuefire from 'vuefire'
import store from './store'
import router from './router'

Vue.use(Vuefire)

export default new Vue({
  store,
  router,
  el: '#app',
  render: (h) => h(App)
})
