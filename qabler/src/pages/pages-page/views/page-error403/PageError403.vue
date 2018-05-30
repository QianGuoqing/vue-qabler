<template>
  <div class="page-error403">
    <error-page
      error-status="403"
      error-message="Oops.. You just found an error page.."
      error-hint="We are sorry but you do not have permission to access this page…"></error-page>
  </div>
</template>

<script>
  import ErrorPage from '../../components/ErrorPage.vue'
  export default {
    name: 'PageError403',
    components: {
      ErrorPage
    }
  }
</script>

<style lang="stylus" scoped>
  
</style>