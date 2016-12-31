<template>
  <div id="app">
    <component :is="activeState"></component>
  </div>
</template>

<script>
import Chat from './components/Chat.vue'
import Auth from './components/Auth.Vue'
import EmptyGameState from './components/EmptyGameState.vue'
import CreateGame from './components/CreateGame.vue'
import GameList from './components/GameList.vue'
import CategoryList from './components/CategoryList.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'app',
  components: {
    Chat,
    Auth,
    EmptyGameState,
    CreateGame,
    GameList,
    CategoryList
  },
  data () {
    return {
      activeState: 'Auth'
    }
  },
  computed: {
    ...mapGetters({
      user: 'getCurrentUser'
    })
  },
  methods: {
  }
}

</script>

<style lang="sass" src="./scss/style.scss"></style>