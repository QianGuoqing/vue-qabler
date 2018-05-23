<template>
  <div class="footer">
    Copyright &copy; {{ getYear() }} Qabler. All rights reserved. Created By Qian.
  </div>
</template>

<script>
  export default {
    name: 'QFooter',
    methods: {
      getYear() {
        return new Date().getFullYear()
      }
    },
  }
</script>

<style lang="stylus" scoped>
  @import '../../common/stylus/variables.styl';
  .footer
    background-color #fff
    border-top 1px solid $color-border
    color $color-text
    font-size 0.875rem
    padding 1.25rem 0
    text-align center
</style>