<template>
  <div class="tab-wrapper">
    <a-row>
      <a-col :span="2"></a-col>
      <a-col :span="20">
        <div class="tab">
          <a-menu mode="horizontal" v-model="current">
            <a-menu-item key="home">
              <a-icon type="home" />Home
            </a-menu-item>
            <a-sub-menu>
              <router-link to="/interface" tag="span" slot="title"><a-icon type="codepen" />Interface</router-link>
              <a-menu-item-group>
                <a-menu-item key="cards-design">
                  <router-link to="/interface/card-design" tag="span">
                    Cards Design
                  </router-link>
                </a-menu-item>
                <a-menu-item key="charts">
                  <router-link to="/interface/charts-page" tag="span">
                    Charts
                  </router-link>
                </a-menu-item>
                <a-menu-item key="pricing-cards">
                  <router-link to="/interface/price-card" tag="span">
                    Pricing Cards
                  </router-link>
                </a-menu-item>
              </a-menu-item-group>
            </a-sub-menu>
            <a-sub-menu>
              <span slot="title"><a-icon type="layout" />Components</span>
              <a-menu-item-group>
                <a-menu-item key="icons">Icons</a-menu-item>
                <a-menu-item key="store">Store</a-menu-item>
                <a-menu-item key="blog">Blog</a-menu-item>
                <a-menu-item key="carousel">Carousel</a-menu-item>
              </a-menu-item-group>
            </a-sub-menu>
            <a-sub-menu>
              <router-link to="/pages" tag="span" slot="title"><a-icon type="file" />Pages</router-link>
              <a-menu-item-group>
                <a-menu-item key="profile">
                  <router-link to="/pages/page-profile" tag="span">Profile</router-link>
                </a-menu-item>
                <a-menu-item key="login">
                  <router-link to="/pages/page-login" tag="span">Login</router-link>
                </a-menu-item>
                <a-menu-item key="register">
                  <router-link to="/pages/page-register" tag="span">
                    Register
                  </router-link>
                </a-menu-item>
                <a-menu-item key="forget-password">
                  <router-link to="/pages/page-forgot-password" tag="span">Forget Password</router-link>
                </a-menu-item>
                <a-menu-item key="400-error">
                  <router-link to="/pages/page-error400" tag="span">
                    400 Error
                  </router-link>
                </a-menu-item>
                <a-menu-item key="401-error">
                  <router-link to="/pages/page-error401" tag="span">
                    401 Error
                  </router-link>
                </a-menu-item>
                <a-menu-item key="403-error">
                  <router-link to="/pages/page-error403" tag="span">
                    403 Error
                  </router-link>
                </a-menu-item>
                <a-menu-item key="404-error">
                  <router-link to="/pages/page-error404" tag="span">
                    404 Error
                  </router-link>
                </a-menu-item>
                <a-menu-item key="500-error">
                  <router-link to="/pages/page-error500" tag="span">
                    500 Error
                  </router-link>
                </a-menu-item>
                <a-menu-item key="503-error">
                  <router-link to="/pages/page-error503" tag="span">
                    503 Error
                  </router-link>
                </a-menu-item>
                <a-menu-item key="email">Email</a-menu-item>
                <a-menu-item key="empty-page">
                  <router-link to="/pages/page-empty">
                    Empty Page
                  </router-link>
                </a-menu-item>
                <a-menu-item key="rlt-mode">
                  <router-link to="/pages/page-rtl">
                    RLT Mode
                  </router-link>
                </a-menu-item>
              </a-menu-item-group>
            </a-sub-menu>
            <a-menu-item key="forms">
              <router-link to="/forms" tag="span">
                <a-icon type="form" />Forms
              </router-link>
            </a-menu-item>
            <a-menu-item key="gallery">
              <a-icon type="picture" />Gallery
            </a-menu-item>
            <a-menu-item key="documentations">
              <router-link to="/documentations" tag="div">
                <a-icon type="file-text" />Documentations
              </router-link>
            </a-menu-item>
          </a-menu>
          <div class="search">
            <a-input-search placeholder="Search..." style="width: 12rem"></a-input-search>
          </div>
        </div>
      </a-col>
      <a-col :span="2"></a-col>
    </a-row>
  </div>
</template>

<script>
  export default {
    name: 'QTab',
    data() {
      return {
        current: ['home']
      }
    },
  }
</script>

<style lang="stylus" scoped>
  .tab-wrapper >>> .ant-menu
    border-bottom none
  .tab-wrapper >>> .ant-menu-item, .ant-menu-submenu-title
    padding 0 0.625rem

  .tab-wrapper
    background-color #fff
    border-bottom 1px solid rgba(0, 40, 100, 0.12)
    .tab
      display flex
      justify-content space-between
      align-items center
</style>