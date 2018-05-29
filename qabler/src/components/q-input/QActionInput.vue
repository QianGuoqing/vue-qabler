<template>
  <div class="ui right labeled input">
    <input type="text" :placeholder="placeholder">
    <slot name="action"></slot>
  </div>
</template>

<script>
  export default {
    name: 'QActionInput',
    props: {
      placeholder: {
        type: String,
        default: ''
      },
    },
  }
</script>

<style scoped>

</style>