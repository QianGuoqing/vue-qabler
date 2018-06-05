<template>
  <div>
    <form-wrapper title="Size">
      <a-button-group slot="content">
        <a-button type="primary" icon="cloud" />
        <a-button type="primary" icon="cloud-download" />
        <a-button type="danger" icon="warning" />
      </a-button-group>
    </form-wrapper>
  </div>
</template>

<script>
  import FormWrapper from '../../../components/FormWrapper.vue'
  export default {
    name: 'IconInputs',
    components: {
      FormWrapper
    }
  }
</script>

<style scoped>
  
</style>