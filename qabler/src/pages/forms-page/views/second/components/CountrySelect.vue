<template>
  <div>
    <form-wrapper title="Country select">
      <a-select slot="content" defaultValue="China" style="width: 100%">
        <a-select-option value="china">China</a-select-option>
        <a-select-option value="usa">USA</a-select-option>
      </a-select>
    </form-wrapper>
  </div>
</template>

<script>
  import FormWrapper from '../../../components/FormWrapper.vue'
  export default {
    name: 'InvalidState',
    components: {
      FormWrapper
    }
  }
</script>

<style scoped>
  
</style>