<template>
<div class="container">
  <div class="text-container">
    <div class="title title-top">
      <h2>ICE BREAKER</h2>
    </div>
    <div class="filler-text">
      <p>Looks like you have no games yet.</p>
      <p>Click below to start one.</p>
    </div>
  </div>
  <div class="new-game-btn">
    <mdl-button primary mini-fab icon="add"></mdl-button>
  </div>
</div>
</template>

<script>
import MdlButton from './mdl/Button.vue'

export default {
  components: {
    MdlButton
  }
}
</script>

<style lang="sass">
  @import "../scss/emptyGameState"
</style>
