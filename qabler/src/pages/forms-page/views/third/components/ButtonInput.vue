<template>
  <div>
    <form-wrapper title="Button input">
      <a-input-group compact slot="content">
        <a-select defaultValue="Action">
          <a-select-option value="action">Action</a-select-option>
          <a-select-option value="another">Another action</a-select-option>
          <a-select-option value="something">Something else here</a-select-option>
          <a-select-option value="link">link</a-select-option>
        </a-select>
        <a-input style="width: 50%" defaultValue="input select action" />
      </a-input-group>
    </form-wrapper>
  </div>
</template>

<script>
  import FormWrapper from '../../../components/FormWrapper.vue'
  export default {
    name: 'ButtonInput',
    components: {
      FormWrapper
    }
  }
</script>

<style scoped>
  
</style>