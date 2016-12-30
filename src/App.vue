<template>
  <div id="app">
    <component :is="activeState"></component>
  </div>
</template>

<script>
import Chat from './components/Chat.vue'
import EnterUser from './components/EnterUser.Vue'
import EmptyGameState from './components/EmptyGameState.vue'
import CreateGame from './components/CreateGame.vue'
import GameList from './components/GameList.vue'
import CategoryList from './components/CategoryList.vue'

export default {
  name: 'app',
  data () {
    return {
      activeState: 'EnterUser'
    }
  },
  components: {
    Chat,
    EnterUser,
    EmptyGameState,
    CreateGame,
    GameList,
    CategoryList
  }
}
</script>
<style lang="sass" src="./scss/style.scss">
</style>