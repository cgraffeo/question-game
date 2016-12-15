<template>
<div class="container">
  <div class="title">
    <h2>ICE BREAKER</h2>
  </div>
  <div class="enter-user-name">
    <mdl-text-field label="Game Name"></mdl-text-field>
  </div>
  <div class="player-invite">
    <p>Invite Players</p>
    <!-- Icon goes here -->
  </div>
  <div class="player-list">
    <p class="players" v-text=""></p>
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
.title{
  color: rgba(255, 255, 255, 0.9);
}
</style>
