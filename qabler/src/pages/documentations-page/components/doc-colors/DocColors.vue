<template>
  <div class="doc-colors">
    <h1 class="title">Colors</h1>
    <div class="desc">Convey meaning through color with a handful of color utility classes.</div>
    <h1 class="title">Contextual colors</h1>
    <div class="desc">A background fill can be applied to a container.</div>
    <div class="color-panel">
      <div class="color-item">
        <div class="box primary"></div>
        <strong class="item-text">Primary</strong>
      </div>
      <div class="color-item">
        <div class="box secondary"></div>
        <strong class="item-text">Secondary</strong>
      </div>
      <div class="color-item">
        <div class="box success"></div>
        <strong class="item-text">Success</strong>
      </div>
      <div class="color-item">
        <div class="box info"></div>
        <strong class="item-text">Info</strong>
      </div>
      <div class="color-item">
        <div class="box warning"></div>
        <strong class="item-text">Warning</strong>
      </div>
      <div class="color-item">
        <div class="box danger"></div>
        <strong class="item-text">Danger</strong>
      </div>
    </div>
    <h1 class="title">Tinting backgrounds</h1>
    <div class="desc">Translucent background fills to shade an element against a background.</div>
    <div class="color-panel">
      <div class="color-item">
        <div class="box darkest-blue"></div>
        <strong class="item-text">Darkest Blue</strong>
      </div>
      <div class="color-item">
        <div class="box darker-blue"></div>
        <strong class="item-text">Darker Blue</strong>
      </div>
      <div class="color-item">
        <div class="box dark-blue"></div>
        <strong class="item-text">Dark Blue</strong>
      </div>
      <div class="color-item">
        <div class="box default-blue"></div>
        <strong class="item-text">Default Blue</strong>
      </div>
      <div class="color-item">
        <div class="box light-blue"></div>
        <strong class="item-text">Light Blue</strong>
      </div>
      <div class="color-item">
        <div class="box lighter-blue"></div>
        <strong class="item-text">Lighter Blue</strong>
      </div>
      <div class="color-item">
        <div class="box lightest-blue"></div>
        <strong class="item-text">Lightest Blue</strong>
      </div>
    </div>
    <h1 class="title">Other colors</h1>
    <div class="desc">Instead of using contextual classes you can use ordinary color names.</div>
    <div class="color-panel other-color-panel">
      <div class="color-item">
        <div class="box blue"></div>
        <strong class="item-text">Blue</strong>
      </div>
      <div class="color-item">
        <div class="box red"></div>
        <strong class="item-text">Red</strong>
      </div>
      <div class="color-item">
        <div class="box teal"></div>
        <strong class="item-text">Teal</strong>
      </div>
      <div class="color-item">
        <div class="box azure"></div>
        <strong class="item-text">Azure</strong>
      </div>
      <div class="color-item">
        <div class="box orange"></div>
        <strong class="item-text">Orange</strong>
      </div>
      <div class="color-item">
        <div class="box cyan"></div>
        <strong class="item-text">Cyan</strong>
      </div>
      <div class="color-item">
        <div class="box indigo"></div>
        <strong class="item-text">Indigo</strong>
      </div>
      <div class="color-item">
        <div class="box yellow"></div>
        <strong class="item-text">Yellow</strong>
      </div>
      <div class="color-item">
        <div class="box gray"></div>
        <strong class="item-text">Gray</strong>
      </div>
      <div class="color-item">
        <div class="box purple"></div>
        <strong class="item-text">Purple</strong>
      </div>
      <div class="color-item">
        <div class="box lime"></div>
        <strong class="item-text">Lime</strong>
      </div>
      <div class="color-item">
        <div class="box dark-gray"></div>
        <strong class="item-text">Dark Gray</strong>
      </div>
      <div class="color-item">
        <div class="box pink"></div>
        <strong class="item-text">Pink</strong>
      </div>
      <div class="color-item">
        <div class="box green"></div>
        <strong class="item-text">Green</strong>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DocColors'
  }
</script>

<style lang="stylus" scoped>
  @import '../../../../common/stylus/variables.styl';
  .box 
    width 3rem
    height 3rem
    border-radius 4px

  .doc-colors
    padding 1.5rem
    background-color #fff
    border 1px solid $color-border
    border-radius 4px
    .title
      color $color-text
      font-size 1.75rem
      font-weight 700
      margin-bottom 1rem
    .desc
      color $color-text
      font-size 1rem
      margin-bottom 1.5rem
    .color-panel
      padding 1rem
      background-color #fff
      border 1px solid $color-border
      border-radius 4px
      margin-bottom 2rem
      .color-item
        display flex
        align-items center
        margin-bottom 1rem
        .item-text
          margin-left 1rem
          color $color-text
        .primary
          background-color $color-primary
        .secondary
          background-color $color-secondary
        .success
          background-color $color-success
        .info
          background-color $color-info
        .warning
          background-color $color-warning
        .danger
          background-color $color-danger
        .darkest-blue
          background-color $color-darkest-blue
        .darker-blue
          background-color $color-darker-blue
        .dark-blue
          background-color $color-dark-blue
        .default-blue
          background-color $color-default-blue
        .light-blue
          background-color $color-light-blue
        .lighter-blue
          background-color $color-lighter-blue
        .lightest-blue
          background-color $color-lightest-blue
    .other-color-panel
        display flex
        flex-flow wrap
      .color-item
        width 30%
        margin-right 3%
        .blue
          background-color $color-blue
        .red
          background-color $color-red
        .teal
          background-color $color-teal
        .azure
          background-color $color-azure
        .orange
          background-color $color-orange
        .cyan
          background-color $color-cyan
        .indigo
          background-color $color-indigo
        .yellow
          background-color $color-yellow
        .gray
          background-color $color-gray
        .purple
          background-color $color-purple
        .lime
          background-color $color-lime
        .dark-gray
          background-color $color-dark-gray
        .pink
          background-color $color-pink
        .green
          background-color $color-green
</style>