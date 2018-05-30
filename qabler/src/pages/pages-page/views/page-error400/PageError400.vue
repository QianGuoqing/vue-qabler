<template>
  <div class="page-error400">
    <error-page
      error-status="400"
      error-message="Oops.. You just found an error page.."
      error-hint="We are sorry but your request contains bad syntax and cannot be fulfilled…"></error-page>
  </div>
</template>

<script>
  import ErrorPage from '../../components/ErrorPage.vue'
  export default {
    name: 'PageError400',
    components: {
      ErrorPage
    }
  }
</script>

<style lang="stylus" scoped>
  
</style>