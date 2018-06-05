<template>
  <div>
    <form-wrapper title="Price">
      <a-input slot="content" addonBefore="$" addonAfter=".00"/>
    </form-wrapper>
  </div>
</template>

<script>
  import FormWrapper from '../../../components/FormWrapper.vue'
  export default {
    name: 'PriceInput',
    components: {
      FormWrapper
    }
  }
</script>

<style scoped>
  
</style>