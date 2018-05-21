<template>
  <div class="tab-wrapper">
    <a-row>
      <a-col :span="2"></a-col>
      <a-col :span="20">
        <div class="tab">
          <div class="tab-item">
            <div class="home">
              <a-icon type="home"/> Home
            </div>
            <div class="interface">
              <a-popover trigger="click">
                <template slot="content">
                  <ul class="list">
                    <li class="item">Cards Design</li>
                    <li class="item">Charts</li>
                    <li class="item">Pricing Cards</li>
                  </ul>
                </template>
                <div class="inter">
                  <a-icon type="codepen"/> Interface
                </div>
              </a-popover>
            </div>
            <div class="components">
              <a-popover trigger="click">
                <template slot="content">
                  <ul class="list">
                    <li class="item">Icons</li>
                    <li class="item">Store</li>
                    <li class="item">Blogs</li>
                    <li class="item">Carousel</li>
                  </ul>
                </template>
                <div class="component">
                  <a-icon type="layout"/> Components
                </div>
              </a-popover>
            </div>
            <div class="pages">
              <a-popover trigger="click">
                <template slot="content">
                  <ul class="list">
                    <li class="item">Profile</li>
                    <li class="item">Login</li>
                    <li class="item">Register</li>
                    <li class="item">Forgot Password</li>
                    <li class="item">400 Error</li>
                    <li class="item">401 Error</li>
                    <li class="item">403 Error</li>
                    <li class="item">404 Error</li>
                    <li class="item">500 Error</li>
                    <li class="item">503 Error</li>
                    <li class="item">Email</li>
                    <li class="item">Empty Page</li>
                    <li class="item">RTL Mode</li>
                  </ul>
                </template>
                <div class="page">
                  <a-icon type="file-text"/> Pages
                </div>
              </a-popover>
            </div>
            <div class="forms">
              <a-icon type="form"/> Forms
            </div>
            <div class="gallery">
              <a-icon type="picture"/> Gallery
            </div>
          </div>
          <div class="search">
            <a-input-search placeholder="Search..." style="width: 18rem"></a-input-search>
          </div>
        </div>
      </a-col>
      <a-col :span="2"></a-col>
    </a-row>
  </div>
</template>

<script>
  export default {
    name: 'QTab'
  }
</script>

<style lang="stylus" scoped>
  .tab-wrapper
    padding 1rem 0
    border-bottom 1px solid rgba(0, 40, 100, 0.12)
    .tab
      display flex
      justify-content space-between
      .tab-item
        display flex
        margin-top 7px
        & > div
          margin-right 15px
</style>