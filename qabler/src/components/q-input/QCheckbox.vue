<template>
  <div :class="[ui, disabled, checkbox]">
    <input type="checkbox" name="checkbox">
    <label>{{ text }}</label>
  </div>
</template>

<script>
  export default {
    name: 'QCheckbox',
    props: {
      text: {
        type: String,
        default: ''
      },
      disabled: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        ui: 'ui',
        checkbox: 'checkbox'
      }
    },
  }
</script>

<style scoped>

</style>