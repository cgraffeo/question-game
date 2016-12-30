<template>
  <div class="container center-content">
    <div class="title">
      <h2 class="center-title">ICE BREAKER</h2>
    </div>
    <div class="enter-user-name col-xs-4 col-xs-offset4">
      <mdl-text-field label-class="centered-label-input" label="Click Here to Enter Your Name"></mdl-text-field>
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
  @import "../scss/enterUser";
</style>
