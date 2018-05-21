<template>
  <div class="q-avatar">
    <slot name="avatar"></slot>
    <div class="info">
      <div class="title">{{ title }}</div>
      <div class="sub-title">{{ subTitle }}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'QAvatar',
    props: {
      title: {
        type: String,
        default: ''
      },
      subTitle: {
        type: String,
        default: ''
      }
    },
  }
</script>

<style lang="stylus" scoped>
  .q-avatar
    display flex
    font-family 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif
    .info
      margin-left 0.5rem
      .title
        font-size 0.9375rem
        font-weight 400
        color #495057
      .sub-title
        color #9aa0ac
        margin-top 0.25rem
        font-size 87.5%
</style>