<template>
  <div class="documentations">
    <a-row>
      <a-col :span="2"></a-col>
      <a-col :span="20">
        <div class="title">Documentation</div>
        <a-row>
          <a-col :span="17">
            <div class="content">
              <router-view></router-view>
            </div>
          </a-col>
          <a-col :span="1"></a-col>
          <a-col :span="6">
            <a class="source-code">
              <a-icon type="github"/>
              <span>browser source code</span>
            </a>
            <a-menu
              :defaultSelectedKeys="['alerts']"
              mode="inline"
              theme="light"
            >
              <a-menu-item key="alerts">
                <router-link tag="div" to="/documentations/alerts">
                  <a-icon type="warning" />
                  Alerts
                </router-link>
              </a-menu-item>
              <a-menu-item key="avatars">
                <router-link tag="div" to="/documentations/avatars">
                  <a-icon type="user" />
                  Avatars
                </router-link>
              </a-menu-item>
              <a-menu-item key="buttons">
                <router-link tag="div" to="/documentations/buttons">
                  <a-icon type="plus-square-o" />
                  Buttons
                </router-link>
              </a-menu-item>
              <a-menu-item key="colors">
                <router-link tag="div" to="/documentations/colors">
                  <a-icon type="edit" />
                  Colors
                </router-link>
              </a-menu-item>
              <a-menu-item key="cards">
                <a-icon type="picture" />
                Cards
              </a-menu-item>
              <a-menu-item key="charts">
                <a-icon type="line-chart" />
                Charts
              </a-menu-item>
              <a-menu-item key="form-components">
                <a-icon type="form" />
                Form Components
              </a-menu-item>
              <a-menu-item key="tags">
                <router-link tag="div" to="/documentations/tags">
                  <a-icon type="tags-o" />
                  Tags
                </router-link>
              </a-menu-item>
            </a-menu>
          </a-col>
        </a-row>
      </a-col>
      <a-col :span="2"></a-col>
    </a-row>
  </div>
</template>

<script>
  export default {
    name: 'DocumentationsPage'
  }
</script>

<style lang="stylus" scoped>
  .documentations
    .title
      font-size 1.5rem
      font-weight 400
      line-height 2.5rem
      padding 1rem 0
    .content
      padding-bottom 2rem
    .source-code
      display block
      font-weight 600
      letter-spacing .03em
      font-size 0.8125rem
      min-width 2.375rem
      color #fff
      background-color #467fcf
      text-align center
      padding .6rem .75rem
      border-radius 5px
      margin .75rem 0
      cursor pointer
      transition all .3s
      &:hover
        background-color #6574cd
</style>