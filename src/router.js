import Vue from 'vue'
import VueRouter from 'vue-router'
import Auth from './components/Auth.Vue'
import Chat from './components/Chat.vue'
import cookie from 'browser-cookies'
// import EmptyGameState from './components/EmptyGameState.vue'
// import CreateGame from './components/CreateGame.vue'
import GameList from './components/GameList.vue'
// import CategoryList from './components/CategoryList.vue'

import store from './store'

Vue.use(VueRouter)

const routes = [
  {name: 'home', path: '/', redirect: '/games'},
  {name: 'gamesList', path: '/games', component: GameList},
  {name: 'game', path: '/game/:gameId', component: Chat},
  {name: 'auth', path: '/auth', component: Auth}
]

const router = new VueRouter({
  routes
})

// Ensure user is authenticated
router.beforeEach((to, from, next) => {
  console.log(to)
  if (store.getters.getCurrentUser === null && to.name !== 'auth') {
    cookie.set('redirect', to.fullPath, {
      expires: 0
    })
    next('/auth')
    return
  }

  cookie.erase('redirect')
  next()
})

export default router
