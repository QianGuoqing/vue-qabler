<template>
  <div class="q-basic-input ui input" :class="[disabled]">
    <input type="text" :placeholder="placeholder">
  </div>
</template>

<script>
  export default {
    name: 'QBasicInput',
    props: {
      placeholder: {
        type: String,
        default: 'something...'
      },
      disabled: {
        type: String,
        default: ''
      }
    },
  }
</script>

<style lang="stylus" scoped>

</style>