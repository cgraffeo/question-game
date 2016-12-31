import './init'
import Vue from 'vue'
import App from './App.vue'
import Vuefire from 'vuefire'
import store from './store'

Vue.use(Vuefire)

export default new Vue({
  store,
  el: '#app',
  render: (h) => h(App)
})
