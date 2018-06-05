<template>
  <div>
    <form-wrapper title="Input group">
      <div class="input-group" slot="content">
        <input type="text" class="form-control" placeholder="Search for...">
        <div class="input-group-append">
          <button class="btn btn-primary" type="button">Go!</button>
        </div>
      </div>
    </form-wrapper>
  </div>
</template>

<script>
  import FormWrapper from '../FormWrapper.vue'
  export default {
    name: 'InputGroup',
    components: {
      FormWrapper
    }
  }
</script>

<style scoped>
  
</style>