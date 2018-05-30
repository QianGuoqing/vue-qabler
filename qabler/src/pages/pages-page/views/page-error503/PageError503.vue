<template>
  <div class="page-error503">
    <div class="error-status">503</div>
    <div class="error-message">Page temporarily unavailable.</div>
    <div class="error-hint">Please reload your browser.</div>
    <q-button>
      <a-icon @click="toGithub" class="icon" type="github" slot="icon" />
    </q-button>
  </div>
</template>

<script>
  export default {
    name: 'PageError500',
    methods: {
      toGithub() {
        window.open('https://github.com/QianGuoqing/vue-qabler')
      }
    },
  }
</script>

<style lang="stylus" scoped>
  .icon 
    font-size 24px
    cursor pointer
    transition all .3s
    &:hover
      opacity .6
  .page-error503
    text-align center
    padding 50px 0
    .error-status
      font-size 4.5rem
      line-height 5rem
      color #9aa0ac
      margin-bottom 1.5rem
    .error-message
      font-size 1.75rem
      line-height 2rem
      color #495057
      margin-bottom 0.75rem
    .error-hint
      font-size 1.125rem
      line-height 1.5rem
      color #9aa0ac
      margin-bottom 3rem
</style>