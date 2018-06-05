<template>
  <div>
    <form-wrapper title="Bootstrap's Custom File Input">
      <div class="form-group" slot="content">
        <label>File input</label>
        <input type="file" class="form-control">
      </div>
    </form-wrapper>
  </div>
</template>

<script>
  import FormWrapper from '../../../components/FormWrapper.vue'
  export default {
    name: 'FileInput',
    components: {
      FormWrapper
    }
  }
</script>

<style scoped>
  
</style>