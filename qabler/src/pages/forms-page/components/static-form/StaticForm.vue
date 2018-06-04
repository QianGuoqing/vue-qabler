<template>
  <div class="static-form">
    <form-wrapper title="Static">
      <div slot="content">
        <div class="text">Username</div>
      </div>
    </form-wrapper>
  </div>
</template>

<script>
  import FormWrapper from '../FormWrapper.vue'
  export default {
    name: 'StaticForm',
    components: {
      FormWrapper
    }
  }
</script>

<style lang="stylus" scoped>
  .text
    padding 0.375rem 0
    line-height 1.6
    color #495057
    font-size 15px
    font-weight normal
</style>