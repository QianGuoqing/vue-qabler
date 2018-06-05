<template>
  <div>
    <form-wrapper title="Textarea">
      <a-textarea placeholder="textarea..." :rows="4" slot="content"/>
    </form-wrapper>
  </div>
</template>

<script>
  import FormWrapper from '../FormWrapper.vue'
  export default {
    name: 'TextareaForm',
    components: {
      FormWrapper
    }
  }
</script>

<style scoped>

</style>