<template>
  <div>
    <form-wrapper title="Input group buttons">
      <div slot="content" class="input-group">
        <input type="text" class="form-control">
        <div class="input-group-append">
          <button type="button" class="btn btn-primary">Action</button>
          <button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <span class="sr-only">Toggle Dropdown</span>
      </button>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
            <div role="separator" class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Separated link</a>
          </div>
        </div>
      </div>
    </form-wrapper>
  </div>
</template>

<script>
  import FormWrapper from '../FormWrapper.vue'
  export default {
    name: 'GroupButtons',
    components: {
      FormWrapper
    }
  }
</script>

<style scoped>
  
</style>