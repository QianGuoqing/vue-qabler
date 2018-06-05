<template>
  <div>
    <form-wrapper title="Subdomain">
      <a-input slot="content" addonAfter=".example.com" placeholder="Your subdomain..." />
    </form-wrapper>
  </div>
</template>

<script>
  import FormWrapper from '../../../components/FormWrapper.vue'
  export default {
    name: 'SubdomainInput',
    components: {
      FormWrapper
    }
  }
</script>

<style scoped>
  
</style>