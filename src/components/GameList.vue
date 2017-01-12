<template>
<div class="container">
  <div class="title title-top">
    <h2>ICE BREAKER</h2>
  </div>
  <div class="games">
    <h5 class="game-title">Games</h5>
    <div class="game-list" v-for="game in myGames">
      <router-link class="your-games" v-text="game.name"  :to="gameRoute(game)"></router-link>
    </div>
  </div>
  <div class="new-game-btn">
    <mdl-button primary fab ripple icon="add" @click="toggleModal"></mdl-button>
  </div>
  <div class="new-game-modal" v-if="toggle">
    <div class="enter-game-details">
      <mdl-text-field label-class="centered-label-input"
        label="Click to Enter Game Name" v-model="gameName"></mdl-text-field>
      <mdl-button primary icon="add" @click="addNewGame"></mdl-button>
    </div>
  </div>
</div>
</template>

<script>
import firebase from 'firebase'
import MdlButton from './mdl/Button.vue'
import MdlTextField from './mdl/TextField.vue'
import {mapGetters} from 'vuex'

let db = firebase.database()
let games = db.ref('games')

export default {
  name: 'GamesList',
  data () {
    return {
      toggle: false,
      gameName: null
    }
  },
  components: {
    MdlButton,
    MdlTextField
  },
  computed: {
    ...mapGetters({
      currentUser: 'getCurrentUser'
    }),

    uid () {
      return this.currentUser.uid
    }
  },
  methods: {
    addNewGame () {
      let name = this.gameName

      let players = {
        [this.uid]: {
          skips: 3,
          turn: true,
          answered: 0,
          asked: 0,
          skipped: 0
        }
      }

      let game = this.$firebaseRefs.myGames.push({name})

      games.child(game.key).set({name, players, owner: this.uid})
    },
    toggleModal () {
      this.toggle = !this.toggle
    },
    gameRoute (game) {
      return {name: 'game', params: {gameId: game['.key']}}
    }
  },
  mounted () {
    let uid = this.currentUser.uid
    let myGamesRef = db.ref(`myGames/${uid}`)

    this.$bindAsArray('myGames', myGamesRef)
  }
}
</script>

<style lang="sass">
@import "../scss/gameList"
</style>
