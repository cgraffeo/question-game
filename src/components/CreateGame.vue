<template>
<div class="container">
  <div class="title title-top">
    <h2>ICE BREAKER</h2>
  </div>
  <div class="enter-game-name">
    <mdl-text-field label-class="centered-label-input"
      label="Click to Enter Game Name"></mdl-text-field>
  </div>
</div>
</template>

<script>
import MdlTextField from './mdl/TextField.vue'

export default {
  components: {
    MdlTextField
  }
}
</script>

<style lang="sass">
@import "../scss/createGame"
</style>
