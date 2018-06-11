<template>
  <div class="progress-card">
    <div class="title">{{ title }}</div>
    <div class="content">{{ content }}</div>
    <a-progress :percent="percent" :status="status" />
  </div>
</template>

<script>
  export default {
    name: 'ProgressCard',
    props: {
      title: {
        type: String,
        default: ''
      },
      content: {
        type: String,
        default: ''
      },
      status: {
        type: String,
        default: ''
      },
      percent: {
        type: Number,
        default: 0
      }
    },
  }
</script>

<style lang="stylus" scoped>
  .progress-card
    border 1px solid rgba(0, 40, 100, 0.12)
    box-shadow 0 1px 2px 0 rgba(0, 0, 0, 0.05)
    background-color #fff
    padding 1rem
    text-align center
    color rgb(73, 80, 87)
    .title
      font-size 1rem
      line-height 2rem
      font-weight 600
    .content
      font-size 3rem
      font-weight 700
      margin 2rem 0
</style>