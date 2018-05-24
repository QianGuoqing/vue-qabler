<template>
  <div class="q-avatars" :class="[size, color]">
    <div v-if="text.length === 0">
      <slot name="avatar"></slot>
    </div>
    <span v-else>{{ text }}</span>
    <div class="status" :class="color" v-show="status"></div>
  </div>
</template>

<script>
  export default {
    name: 'QAvatars',
    props: {
      size: {
        type: String,
        default: 'avatar'
      },
      color: {
        type: String,
        default: 'avatar-blue'
      },
      text: {
        type: String,
        default: ''
      },
      status: {
        type: Boolean,
        default: false
      }
    },
  }
</script>

<style lang="stylus" scoped>
  @import '../../common/stylus/variables.styl';

  .q-avatars
    border-radius 50%
    text-align center
    font-weight 600
    position relative
    img
      border-radius 50%
      width 100%
      height 100% 
    .status
      position absolute
      right -2px
      bottom -2px
      width 0.75rem
      height 0.75rem
      border 2px solid #fff
      border-radius 50%
      &.avatar-blue
        background-color $color-blue
      &.avatar-azure
        background-color $color-azure
      &.avatar-indigo
        background-color $color-indigo
      &.avatar-purple
        background-color $color-purple
      &.avatar-pink
        background-color $color-pink
      &.avatar-red
        background-color $color-red
      &.avatar-orange
        background-color $color-orange
      &.avatar-yellow
        background-color $color-yellow
      &.avatar-lime
        background-color $color-lime
      &.avatar-green
        background-color $color-green
      &.avatar-teal
        background-color $color-teal
      &.avatar-cyan
        background-color $color-cyan
      &.avatar-gray
        background-color $color-gray
      &.avatar-dark-gray
        background-color $color-dark-gray
  
  .avatar-sm
    width 1.5rem
    height 1.5rem
    line-height 1.5rem
    font-size 0.75rem
  .avatar
    width 2rem
    height 2rem
    line-height 2rem
    font-size 1rem
  .avatar-md
    width 2.5rem
    height 2.5rem
    line-height 2.5rem
    font-size 1.25rem
  .avatar-lg
    width 3rem
    height 3rem
    line-height 3rem
    font-size 1.5rem
  .avatar-xl
    width 4rem
    height 4rem
    line-height 4rem
    font-size 2rem
  .avatar-xxl
    width 5rem
    height 5rem
    line-height 5rem
    font-size 2.5rem
  
  .avatar-blue
    background-color #c8d9f1
    color $color-primary
  .avatar-azure
    background-color #c7e6fb
    color #45aaf2
  .avatar-indigo
    background-color #d1d5f0
    color $color-indigo
  .avatar-purple
    background-color #e4cff9
    color $color-purple
  .avatar-pink
    background-color #fcd3e1
    color $color-pink
  .avatar-red
    background-color #f0bcbc
    color $color-red
  .avatar-orange
    background-color #fee0c7
    color $color-orange
  .avatar-yellow
    background-color #fbedb7
    color $color-yellow
  .avatar-lime
    background-color #d7f2c2
    color $color-lime
  .avatar-green
    background-color #cfeab3
    color $color-green
  .avatar-teal
    background-color #bfefea
    color $color-teal
  .avatar-cyan
    background-color #b9e3ea
    color $color-cyan
  .avatar-gray
    background-color #dbdde0
    color $color-gray
  .avatar-dark-gray
    background-color #c2c4c6
    color $color-dark-gray
</style>