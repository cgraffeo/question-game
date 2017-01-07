import firebase from 'firebase'
import router from '../../router'
import cookie from 'browser-cookies'
export default (store) => {
  firebase.auth().onAuthStateChanged((user) => {
    let redirect = cookie.get('redirect')
    store.commit(user ? 'login' : 'logout', user)
    router.push(redirect || {name: user ? 'gamesList' : 'auth'})
  })
}
