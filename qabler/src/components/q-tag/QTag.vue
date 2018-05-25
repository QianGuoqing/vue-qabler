<template>
  <span class="q-tag" :class="[color, link]">
    <div class="content">
      <slot name="avatar"></slot>
      <div class="text">{{ text }}</div>
    </div>
  </span>
</template>

<script>
  export default {
    name: 'QTag',
    props: {
      text: {
        type: String,
        default: ''
      },
      link: {
        type: String,
        default: ''
      },
      color: {
        type: String,
        default: 'tag-default-color'
      }
    },
  }
</script>

<style lang="stylus" scoped>
  @import '../../common/stylus/variables.styl';

  .content
    display flex
    img
      width 1.5rem
      height 1.5rem
      position relative
      left -.5rem
      border-radius 3px

  .q-tag
    padding 0 0.5rem
    border-radius 3px
    font-size 0.75rem
    line-height 1.5rem
    border-radius 3px
    display inline-block
    color #fff
    &.tag-default-color
      color #6e7687
      background-color #e9ecef
    &.tag-blue
      background-color $color-blue
    &.tag-azure
      background-color $color-azure
    &.tag-indigo
      background-color $color-indigo
    &.tag-purple
      background-color $color-purple
    &.tag-pink
      background-color $color-pink
    &.tag-red
      background-color $color-red
    &.tag-orange
      background-color $color-orange
    &.tag-yellow
      background-color $color-yellow
    &.tag-lime
      background-color $color-lime
    &.tag-green
      background-color $color-green
    &.tag-teal
      background-color $color-teal
    &.tag-cyan
      background-color $color-cyan
    &.tag-gray
      background-color $color-gary
    &.color-dark-gray
      background-color $color-dark-gray
    &.link
      cursor pointer
      transition all .3s
      &:hover
        opacity .8
</style>