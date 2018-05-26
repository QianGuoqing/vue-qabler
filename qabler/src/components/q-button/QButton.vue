<template>
  <div class="q-button" :class="[color, size, block, disable, outline, social]">
    <div class="loading" v-if="loading">
      <!-- <img src="../../assets/images/loading/loading-bars.svg" alt=""> -->
      <a-icon type="loading"/>
    </div>
    <div v-else>
      <slot name="icon"></slot>
      <span class="text">{{ text }}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'QButton',
    props: {
      text: {
        type: String,
        default: ''
      },
      color: {
        type: String,
        default: ''
      },
      size: {
        type: String,
        default: ''
      },
      block: {
        type: String,
        default: ''
      },
      disable: {
        type: String,
        default: ''
      },
      outline: {
        type: String,
        default: ''
      },
      social: {
        type: String,
        default: ''
      },
      loading: {
        type: Boolean,
        default: false
      }
    },
  }
</script>

<style lang="stylus" scoped>
  @import '../../common/stylus/variables.styl';

  .loading
    color #fff

  .q-button
    display inline-block
    color #fff
    background-color $color-primary
    font-size 0.8125rem
    font-weight 600
    letter-spacing .03em
    text-align center
    border-radius 3px
    padding 0.5rem .75rem
    cursor pointer
    transition all .3s
    &:hover
      opacity .8
    &.btn-primary
      background-color $color-primary
    &.btn-success
      background-color $color-success
    &.btn-secondary
      background-color $color-secondary
    &.btn-warning
      background-color $color-warning
    &.btn-danger
      background-color $color-danger
    &.btn-info
      background-color $color-info
    &.disable
      opacity .8
      cursor default
    &.btn-blue
      background-color $color-blue
    &.btn-azure
      background-color $color-azure
    &.btn-indigo
      background-color $color-indigo
    &.btn-purple
      background-color $color-purple
    &.btn-pink
      background-color $color-pink
    &.btn-red
      background-color $color-red
    &.btn-orange
      background-color $color-orange
    &.btn-yellow
      background-color $color-yellow
    &.btn-lime
      background-color $color-lime
    &.btn-green
      background-color $color-green
    &.btn-teal
      background-color $color-teal
    &.btn-cyan
      background-color $color-cyan
    &.btn-gray
      background-color $color-gray
    &.btn-dary-gray
      background-color $color-dary-gray
    &.btn-black
      background-color $color-black
    &.btn-outline-primary
      border 1px solid $color-primary
      color $color-primary
      background-color #fff
      transition all .3s
      &:hover
        color #fff
        background-color $color-primary
    &.btn-outline-info
      border 1px solid $color-info
      color $color-info
      background-color #fff
      transition all .3s
      &:hover
        color #fff
        background-color $color-info
    &.btn-outline-success
      border 1px solid $color-success
      color $color-success
      background-color #fff
      transition all .3s
      &:hover
        color #fff
        background-color $color-success
    &.btn-outline-secondary
      border 1px solid $color-secondary
      color $color-secondary
      background-color #fff
      transition all .3s
      &:hover
        color #fff
        background-color $color-secondary
    &.btn-outline-warning
      border 1px solid $color-warning
      color $color-warning
      background-color #fff
      transition all .3s
      &:hover
        color #fff
        background-color $color-warning
    &.btn-outline-danger
      border 1px solid $color-danger
      color $color-danger
      background-color #fff
      transition all .3s
      &:hover
        color #fff
        background-color $color-danger
    &.btn-lg
      font-size 1rem
      padding 1rem 1.5rem
    &.btn-sm
      font-size 0.5rem
      padding 0.25rem .375rem
    &.btn-block
      width 100%
      display block
    &.btn-social
      padding 0.5rem
</style>