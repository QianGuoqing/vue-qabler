<template>
  <div>
    <form-wrapper title="Username">
      <a-input slot="content" addonBefore="@" placeholder="Username..." />
    </form-wrapper>
  </div>
</template>

<script>
  import FormWrapper from '../../../components/FormWrapper.vue'
  export default {
    name: 'UsernameInput',
    components: {
      FormWrapper
    }
  }
</script>

<style scoped>
  
</style>