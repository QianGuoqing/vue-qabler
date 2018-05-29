<template>
  <div class="ui toggle checkbox">
    <input type="checkbox">
    <label>{{ text }}</label>
  </div>
</template>

<script>
  export default {
    name: 'QToggle',
    props: {
      text: {
        type: String,
        default: ''
      },
    },
  }
</script>

<style scoped>

</style>