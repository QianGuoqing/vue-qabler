<template>
  <div class="form-wrapper">
    <div class="title">{{ title }}</div>
    <slot name="content"></slot>
  </div>
</template>

<script>
  export default {
    name: 'FormWrapper',
    props: {
      title: {
        type: String,
        default: ''
      },
    },
  }
</script>

<style lang="stylus" scoped>
  .form-wrapper
    .title
      margin-bottom 0.375rem
      font-weight 600
      font-size 0.875rem
</style>