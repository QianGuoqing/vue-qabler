<template>
  <div class="browser-list">
    <div class="title">Brand List</div>
    <ul class="list">
      <li class="item">
        <div class="icon-name">
          <div class="icon">
            <a-icon type="android" />
          </div>
          <div class="name">Android</div>
        </div>
        <div class="stat">23%</div>
      </li>
      <li class="item">
        <div class="icon-name">
          <div class="icon">
            <a-icon type="apple" />
          </div>
          <div class="name">Apple</div>
        </div>
        <div class="stat">23%</div>
      </li>
      <li class="item">
        <div class="icon-name">
          <div class="icon">
            <a-icon type="windows" />
          </div>
          <div class="name">Windows</div>
        </div>
        <div class="stat">23%</div>
      </li>
      <li class="item">
        <div class="icon-name">
          <div class="icon">
            <a-icon type="ie" />
          </div>
          <div class="name">IE</div>
        </div>
        <div class="stat">23%</div>
      </li>
      <li class="item">
        <div class="icon-name">
          <div class="icon">
            <a-icon type="chrome" />
          </div>
          <div class="name">Chrome</div>
        </div>
        <div class="stat">23%</div>
      </li>
      <li class="item">
        <div class="icon-name">
          <div class="icon">
            <a-icon type="github" />
          </div>
          <div class="name">Github</div>
        </div>
        <div class="stat">23%</div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'BrowserList'
  }
</script>

<style lang="stylus" scoped>
  .browser-list
    border 1px solid rgba(0, 40, 100, 0.12)
    box-shadow 0 1px 2px 0 rgba(0, 0, 0, 0.05)
    background-color #fff
    padding 1rem
    .title
      font-size 1.125rem
      padding .5rem 0 1.5rem .5rem
    .list
      .item
        display flex
        justify-content space-between
        padding 1rem .5rem
        border-top 1px solid rgba(0, 40, 100, 0.12)
        color #868e96
        &:last-child  
          border-bottom 1px solid rgba(0, 40, 100, 0.12)
        .icon-name
          display flex
          align-items center
          .icon
            margin-right 2rem
</style>