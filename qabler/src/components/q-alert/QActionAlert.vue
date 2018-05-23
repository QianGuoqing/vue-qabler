<template>
  <div class="q-action-alert" :class="type">
    <div class="text">{{ text }}</div>
    <div class="buttons">
      <div class="enter-button" :class="type" @click="enterHandler">{{ enterText }}</div>
      <div class="cancel-button" @click="cancelHandler">{{ cancelText }}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'QActionAlert',
    props: {
      text: {
        type: String,
        default: ''
      },
      type: {
        type: String,
        default: 'primary'
      },
      enterText: {
        type: String,
        default: 'Enter'
      },
      cancelText: {
        type: String,
        default: 'Cancel'
      },
      enterHandler: {
        type: Function,
        default: function() {
          alert('Enter 确认')
        }
      },
      cancelHandler: {
        type: Function,
        default: function() {
          alert('Cancel 取消')
        }
      }
    },
  }
</script>

<style lang="stylus" scoped>
  @import '../../common/stylus/variables.styl';

  .q-action-alert
    padding 0.75rem 1.25rem
    border-radius 3px
    font-size 0.9375rem
    .buttons
      display flex
      margin-top 1rem
      .enter-button, .cancel-button
        cursor pointer
        font-size 13px
        font-weight 600
        letter-spacing .03rem
        padding 0.5rem 0.75rem
        border-radius 4px
        transition all .3s
      .cancel-button
        color $color-text
        background-color #fff
      .cancel-button:hover
        background-color rgba(0, 0, 0, 0.1)
      .enter-button
        color #fff
        margin-right 1rem
      .primary
        background-color $color-primary
      .primary:hover
        background-color $color-light-blue
      .success
        background-color $color-green 
      .success:hover
        background-color rgb(62, 122, 0)
      .info
        background-color $color-light-blue
      .info:hover
        background-color $color-lighter-blue
      .warning
        background-color $color-orange
      .warning:hover
        opacity 0.6
      .danger
        background-color $color-pink
      .danger:hover
        opacity 0.6
      .secondary
        background-color $color-dark-gray
      .secondary:hover
        opacity 0.6
  .primary
    color $color-dark-blue
    background-color $color-lightest-blue
    border 1px solid $color-lighter-blue
  .secondary
    color #464a4e
    background-color #e7e8ea
    border 1px solid #dddfe2
  .success
    color #316100
    background-color #dff1cc
    border 1px solid #d2ecb8
  .info
    color #24587e
    background-color #daeefc
    border 1px solid #cbe7fb
  .warning
    color #7d6608
    background-color #fcf3cf
    border 1px solid #fbeebc
  .danger
    color #6b1110
    background-color #f5d2d2
    border 1px solid #f1c1c0
</style>