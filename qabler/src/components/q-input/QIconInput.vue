<template>
  <div :class="[ui, direction, iconc, input, disabled]">
    <input type="text" :placeholder="placeholder">
    <i class="icon" :class="[icon]"></i>
  </div>
</template>

<script>
  export default {
    name: 'QIconInput',
    props: {
      placeholder: {
        type: String,
        default: ''
      },
      icon: {
        type: String,
        default: ''
      },
      direction: {
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
        iconc: 'icon',
        input: 'input'
      }
    },
  }
</script>

<style scoped>

</style>