<template>
  <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label mdl-textfield--full-width">
    <input class="mdl-textfield__input" type="text" :id="id"
           :value="value" @input="updateValue($event.target.value)">
    <label class="mdl-textfield__label" :for="id" v-text="label"></label>
  </div>
</template>
<script>
import upgradeElement from './upgradeElement'

export default {
  mixins: [upgradeElement],
  props: ['id', 'label', 'value'],
  methods: {
    updateValue (value) {
      this.$emit('input', value)
    }
  }
}
</script>