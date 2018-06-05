<template>
  <div class="readonly-input">
    <form-wrapper title="Readonly">
      <a-input slot="content" placeholder="Well, how'd you become king, then?" disabled/>
    </form-wrapper>
  </div>
</template>

<script>
  import FormWrapper from '../FormWrapper.vue'
  export default {
    name: 'ReadonlyInput',
    components: {
      FormWrapper
    }
  }
</script>

<style scoped>

</style>