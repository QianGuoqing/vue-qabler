<template>
  <div class="error-page">
    <div class="error-status">{{ errorStatus }}</div>
    <div class="error-message">{{ errorMessage }}</div>
    <div class="error-hint">{{ errorHint }}</div>
    <q-button text="Go back">
      <a-icon type="left" slot="icon" />
    </q-button>
  </div>
</template>

<script>
  import QButton from '../../../components/q-button/QButton.vue'
  export default {
    name: 'ErrorPage',
    props: {
      errorStatus: {
        type: String,
        default: ''
      },
      errorMessage: {
        type: String,
        default: ''
      },
      errorHint: {
        type: String,
        default: ''
      }
    },
    components: {
      QButton
    }
  }
</script>

<style lang="stylus" scoped>
  .error-page
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