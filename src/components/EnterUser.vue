<template>
<div class="container">
  <div class="title">
    <h2>ICE BREAKER</h2>
  </div>
  <div class="enter-user-name">
    <mdl-text-field label="Enter Your Name"></mdl-text-field>
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
