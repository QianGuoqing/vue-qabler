<template>
  <div>
    <form-wrapper title="Password">
      <a-input slot="content" type="password"/>
    </form-wrapper>
  </div>
</template>

<script>
  import FormWrapper from '../../../components/FormWrapper.vue'
  export default {
    name: 'PasswordInput',
    components: {
      FormWrapper
    }
  }
</script>

<style scoped>

</style>