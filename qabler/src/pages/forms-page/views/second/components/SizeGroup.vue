<template>
  <div>
    <form-wrapper title="Size">
      <a-button-group slot="content">
        <a-button type="primary">L</a-button>
        <a-button>M</a-button>
        <a-button>M</a-button>
        <a-button type="dashed">R</a-button>
      </a-button-group>
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