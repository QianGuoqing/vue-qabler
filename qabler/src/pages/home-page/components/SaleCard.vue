<template>
  <div class="sale-card">
    <div class="icon-wrapper" :class="[color]">
      <slot name="sale-icon"></slot>
    </div>
    <div class="info">
      <div class="count-text">
        <span class="count">{{ count }}</span>
        <span class="text">{{ text }}</span>
      </div>
      <div class="content">{{ content }}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SaleCard',
    props: {
      color: {
        type: String,
        default: 'primary'
      },
      count: {
        type: String,
        default: ''
      },
      text: {
        type: String,
        default: ''
      },
      content: {
        type: String,
        default: ''
      }
    },
  }
</script>

<style lang="stylus" scoped>
  @import "../../../common/stylus/variables.styl";
  .sale-card
    border 1px solid rgba(0, 40, 100, 0.12)
    box-shadow 0 1px 2px 0 rgba(0, 0, 0, 0.05)
    background-color #fff
    padding 1rem
    display flex
    align-items center
    .icon-wrapper
      width 2.5rem
      height 2.5rem
      text-align center
      line-height 2.5rem
      border-radius 4px
      color #fff
      &.primary
        background-color $color-primary
      &.success
        background-color $color-success
      &.danger
        background-color $color-danger
      &.warning
        background-color $color-warning
    .info
      margin-left 1rem
      .count-text
        font-size 1.125rem
        margin-bottom 0.5rem
        .count
          font-weight 600
      .content
        color #9aa0ac
        font-size 0.875rem
</style>