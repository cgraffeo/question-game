import firebase from 'firebase'

export default {
  state: {
    user: null
  },
  getters: {
    getCurrentUser (state) {
      return state.user
    }
  },
  mutations: {
    login (state, user) {
      state.user = user
    },
    logout (state) {
      state.user = null
    }
  },
  actions: {
    login (context, {email, password}) {
      return firebase.auth().signInWithEmailAndPassword(email, password)
    },
    signup (context, {email, password, displayName}) {
      return firebase.auth().createUserWithEmailAndPassword(email, password)
    }
  }
}
