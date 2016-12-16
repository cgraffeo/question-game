<template>
  <div id="app">
    <!-- <chat></chat> -->
    <!-- <enter-user></enter-user> -->
    <!-- <empty-game-state></empty-game-state> -->
    <create-game></create-game>
  </div>
</template>

<script>
  // import Chat from './components/Chat.vue'
  // import EnterUser from './components/EnterUser.Vue'
  // import EmptyGameState from './components/EmptyGameState.vue'
  import CreateGame from './components/CreateGame.vue'

export default {
  name: 'app',
  components: {
    // Chat
    // EnterUser
    // EmptyGameState
    CreateGame
  }
}
</script>
<style lang="sass" src="./scss/style.scss">
</style>