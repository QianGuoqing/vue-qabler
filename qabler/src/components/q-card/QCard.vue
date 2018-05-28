<template>
  <div class="q-card" :class="[color]">
    <div class="card-poster">
      <slot name="card-poster"></slot>
    </div>
    <div class="card-title" :class="[color]">
      <slot name="card-title"></slot>
    </div>
    <div class="card-body loading" v-if="loading">
       <a-icon type="loading"/>
    </div>
    <div class="card-body" v-else>
      <slot name="card-body"></slot>
    </div>
    <div class="card-footer" :class="[color]">
      <slot name="card-footer"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'QCard',
    props: {
      color: {
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
    text-align center

  .q-card
    border 1px solid rgba(0, 40, 100, 0.12)
    border-radius 3px
    color #495057
    background-color #fff
    &.card-blue
      border 1px solid $color-blue
    &.card-azure
      border 1px solid $color-azure
    &.card-indigo
      border 1px solid $color-indigo
    &.card-purple
      border 1px solid $color-purple
    &.card-pink
      border 1px solid $color-pink
    &.card-red
      border 1px solid $color-red
    &.card-orange
      border 1px solid $color-orange
    &.card-yellow
      border 1px solid $color-yellow
    &.card-lime
      border 1px solid $color-lime
    &.card-green
      border 1px solid $color-green
    &.card-teal
      border 1px solid $color-teal
    &.card-cyan
      border 1px solid $color-cyan
    &.card-gray
      border 1px solid $color-gray
    &.card-dary-gray
      border 1px solid $color-dary-gray
    .card-poster
      img
        width 100%
        border-radius 3px 3px 0 0
    .card-title
      font-size 1.125rem
      font-weight 700
      line-height 1.2
      border-bottom 1px solid rgba(0, 40, 100, 0.12)
      padding 1.5rem 1.5rem
      &.card-blue
        border-bottom 1px solid $color-blue
      &.card-azure
        border-bottom 1px solid $color-azure
      &.card-indigo
        border-bottom 1px solid $color-indigo
      &.card-purple
        border-bottom 1px solid $color-purple
      &.card-pink
        border-bottom 1px solid $color-pink
      &.card-red
        border-bottom 1px solid $color-red
      &.card-orange
        border-bottom 1px solid $color-orange
      &.card-yellow
        border-bottom 1px solid $color-yellow
      &.card-lime
        border-bottom 1px solid $color-lime
      &.card-green
        border-bottom 1px solid $color-green
      &.card-teal
        border-bottom 1px solid $color-teal
      &.card-cyan
        border-bottom 1px solid $color-cyan
      &.card-gray
        border-bottom 1px solid $color-gray
      &.card-dary-gray
        border-bottom 1px solid $color-dary-gray  
      div
        display flex
        justify-content space-between
        div + div
          margin-left 5px
    .card-body
      font-size 0.9375rem
      line-height 1.66
      font-weight 400
      padding 1.5rem 1.5rem 
    .card-footer
      color #6e7687
      border-top 1px solid rgba(0, 40, 100, 0.12)
      padding 1rem 1.5rem 
      font-size 15px
      &.card-blue
        border-top 1px solid $color-blue
      &.card-azure
        border-top 1px solid $color-azure
      &.card-indigo
        border-top 1px solid $color-indigo
      &.card-purple
        border-top 1px solid $color-purple
      &.card-pink
        border-top 1px solid $color-pink
      &.card-red
        border-top 1px solid $color-red
      &.card-orange
        border-top 1px solid $color-orange
      &.card-yellow
        border-top 1px solid $color-yellow
      &.card-lime
        border-top 1px solid $color-lime
      &.card-green
        border-top 1px solid $color-green
      &.card-teal
        border-top 1px solid $color-teal
      &.card-cyan
        border-top 1px solid $color-cyan
      &.card-gray
        border-top 1px solid $color-gray
      &.card-dary-gray
        border-top 1px solid $color-dary-gray
</style>