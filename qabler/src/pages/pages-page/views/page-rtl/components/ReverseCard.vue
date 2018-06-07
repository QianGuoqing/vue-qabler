<template>
  <div class="reverse-card">
    <div class="up-down">
      <div class="up" v-if="flag">
        <a-icon type="up"/> {{ percent }}
      </div>
      <div class="down" v-else>
        <a-icon type="down"/> {{ percent }}
      </div>
    </div>
    <div class="content">{{ content }}</div>
    <div class="text">{{ text }}</div>
  </div>
</template>

<script>
  export default {
    name: 'ReverseCard',
    props: {
      flag: {
        type: Boolean,
        default: true
      },
      percent: {
        type: String,
        default: ''
      },
      content: {
        type: String,
        default: ''
      },
      text: {
        type: String,
        default: ''
      }
    },
  }
</script>

<style lang="stylus" scoped>
  .reverse-card
    border 1px solid rgba(0, 40, 100, 0.12)
    width 10rem
    height 10rem
    box-shadow 0 1px 2px 0 rgba(0, 0, 0, 0.05)
    background-color #fff
    padding 1rem
    .up-down
      .up
        color #5eba00
      .down
        color #cd201f
    .content
      font-size 2rem
      font-weight 600
      text-align center
      padding 1.5rem 0
    .text
      color #9aa0ac
      text-align center
</style>