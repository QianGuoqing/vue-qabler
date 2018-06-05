<template>
  <div class="text-input">
    <form-wrapper title="Text">
      <div slot="content">
        <a-input placeholder="Text..."/>
      </div>
    </form-wrapper>
  </div>
</template>

<script>
  import FormWrapper from '../FormWrapper.vue'
  export default {
    name: 'TextInput',
    components: {
      FormWrapper
    }
  }
</script>

<style lang="stylus" scoped>

</style>