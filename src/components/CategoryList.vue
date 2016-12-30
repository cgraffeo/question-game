<template>
  <div class="container category-list">
    <div v-for="cat in categories">
      <p @click.prevent="" class="categories" v-if="cat.id" v-text="cat.label"></p>
    </div>
  </div>
</template>

<script>
  import categories from '../data/catagories'

  export default {
    computed: {
      categories () {
        return categories
      }
    }
  }
</script>

<style lang="sass">
  @import "../scss/categoryList";
</style>
