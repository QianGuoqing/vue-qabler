<template>
  <div class="page-error404">
    <error-page
      error-status="404"
      error-message="Oops.. You just found an error page.."
      error-hint="We are sorry but our service is currently not available…"></error-page>
  </div>
</template>

<script>
  import ErrorPage from '../../components/ErrorPage.vue'
  export default {
    name: 'PageError404',
    components: {
      ErrorPage
    }
  }
</script>

<style lang="stylus" scoped>
  
</style>