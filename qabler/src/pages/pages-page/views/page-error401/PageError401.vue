<template>
  <div class="page-error401">
    <error-page
      error-status="401"
      error-message="Oops.. You just found an error page.."
      error-hint="We are sorry but you are not authorized to access this page…"></error-page>
  </div>
</template>

<script>
  import ErrorPage from '../../components/ErrorPage.vue'
  export default {
    name: 'PageError401',
    components: {
      ErrorPage
    }
  }
</script>

<style lang="stylus" scoped>
  
</style>