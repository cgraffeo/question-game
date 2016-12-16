<template>
<div class="container">
  <div class="title title-top">
    <h2>ICE BREAKER</h2>
  </div>
  <div class="games">
    <h5 class="game-title">Games</h5>
    <div class="game-list" v-for="game in games">
      <p class="your-games" v-if="game.gameId" v-text="game.title"></p>
        <!-- To display players, do we need a new set of data, or can we pull it from dummyGames.js, or our other data structure we created? -->
        <div class="players-in-game" v-for="game in games">
          <p class="players" v-if="game.gameID" v-text="game.players"></p>
        </div>
      <div class="play-btn">
        <mdl-button primary icon="play_circle_outline"></mdl-button>
      </div>
    </div>
  </div>
  <div class="new-game-btn">
    <mdl-button primary fab ripple icon="add"></mdl-button>
  </div>
</div>
</template>

<script>
import games from '../data/dummyGames'
import MdlButton from './mdl/Button.vue'

export default {
  components: {
    MdlButton
  },
  computed: {
    games () {
      return games
    }
  }
}
</script>

<style lang="sass">
@import "../scss/gameList"
</style>
