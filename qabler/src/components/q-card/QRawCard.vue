<template>
  <div class="q-raw-card">
    <slot name="icon"></slot>
    <slot name="card-content"></slot>
  </div>
</template>

<script>
  export default {
    name: 'QRawCard'
  }
</script>

<style lang="stylus" scoped>
  .q-raw-card
    display flex
    justify-content space-between
    padding 1.5rem
    border 1px solid rgba(0, 40, 100, 0.12)
    border-radius 3px
    color #495057
    background-color #fff
    font-size 0.8rem
    font-weight 400
</style>