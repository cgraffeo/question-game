import firebase from 'firebase'

export default (store) => {
  firebase.auth().onAuthStateChanged((user) => {
    store.commit(user ? 'login' : 'logout', user)
  })
}
