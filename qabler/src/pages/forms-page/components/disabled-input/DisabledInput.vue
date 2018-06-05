<template>
  <div class="disabled-input">
    <form-wrapper title="Disabled">
      <a-input slot="content" placeholder="Well, she turned me into a newt." disabled/>
    </form-wrapper>
  </div>
</template>

<script>
  import FormWrapper from '../FormWrapper.vue'
  export default {
    name: 'DisabledInput',
    components: {
      FormWrapper
    }
  }
</script>

<style scoped>

</style>