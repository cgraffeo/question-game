import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase'
import Vuefire from 'vuefire'

Vue.use(Vuefire)

firebase.initializeApp({
  apiKey: 'AIzaSyA1Nyd07cZ_325JhAiqN1zHICE1Phkikrs',
  authDomain: 'ice-breaker-afda1.firebaseapp.com',
  databaseURL: 'https://ice-breaker-afda1.firebaseio.com',
  storageBucket: 'ice-breaker-afda1.appspot.com',
  messagingSenderId: '730408825122'
})

new Vue({ // eslint-disable-line no-new
  el: '#app',
  render: (h) => h(App)
})
