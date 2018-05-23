<template>
  <div class="q-basic-alert" :class="type">
    {{ text }}
  </div>
</template>

<script>
  export default {
    name: 'QBasicAlert',
    props: {
      text: {
        type: String,
        default: ''
      },
      type: {
        type: String,
        default: 'primary'
      }
    },
  }
</script>

<style lang="stylus" scoped>
  @import '../../common/stylus/variables.styl';

  .q-basic-alert
    padding 0.75rem 1.25rem
    border-radius 3px
    font-size 0.9375rem
  
  .primary
    color $color-dark-blue
    background-color $color-lightest-blue
    border 1px solid $color-lighter-blue
  .secondary
    color #464a4e
    background-color #e7e8ea
    border 1px solid #dddfe2
  .success
    color #316100
    background-color #dff1cc
    border 1px solid #d2ecb8
  .info
    color #24587e
    background-color #daeefc
    border 1px solid #cbe7fb
  .warning
    color #7d6608
    background-color #fcf3cf
    border 1px solid #fbeebc
  .danger
    color #6b1110
    background-color #f5d2d2
    border 1px solid #f1c1c0
</style>