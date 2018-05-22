<template>
  <div class="header">
    <div class="header-info">
      <a-row>
        <a-col :span="2"></a-col>
        <a-col :span="20">
          <div class="header-content">
            <div class="logo-wrapper">
              <img src="../../assets/images/brand/tabler.svg" class="logo" alt="">
            </div>
            <div class="info-wrapper">
              <div class="source-button">source code</div>
              <div class="header-badge">
                <a-badge dot>
                  <a-icon type="notification"/>
                </a-badge>
              </div>
              <div class="header-avatar">
                <q-avatar title="Jane Pearson" sub-title="Administrator">
                  <div slot="avatar" class="avatar-wrapper">
                    <img src="../../assets/images/faces/female/19.jpg" alt="" class="avatar">
                  </div>
                </q-avatar>
              </div>
            </div>
          </div>
        </a-col>
        <a-col :span="2"></a-col>
      </a-row>
    </div>
    <div class="header-tab">
      <a-row>
        <a-col :span="2"></a-col>
        <a-col :span="20">
          
        </a-col>
        <a-col :span="2"></a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
  import QAvatar from '../../components/q-avatar/QAvatar.vue'
  export default {
    name: 'QHeader',
    components: {
      QAvatar
    }
  }
</script>

<style lang="stylus" scoped>
  .header
    background-color #fff
    .header-info
      padding 1rem 0
      border-bottom 1px solid rgba(0, 40, 100, 0.12)
      .header-content
        display flex
        justify-content space-between
        .logo-wrapper
          display flex
          .logo
            height 2rem
            transition all .3s
            cursor pointer
            &:hover
              opacity 0.8
        .info-wrapper
          display flex
          align-items center
          .source-button
            display inline-block
            font-size 0.75rem
            font-weight 600
            letter-spacing .03rem
            padding 0.25rem 0.5rem
            border-radius 3px
            line-height 1.333333
            color #467fcf
            border 1px solid #467fcf
            cursor pointer
            transition all .3s
            &:hover
              color #fff
              background-color #467fcf
          .header-badge
            color #333
            width 40px
            height 35px
            text-align center
            line-height 35px
            margin 0 .5rem
            cursor pointer
            transition all .3s
            :hover
              color #495057
          .header-avatar
            cursor pointer
            transition all .3s
            &:hover
              text-shadow 0 0 2px #ccc
            .avatar-wrapper
              .avatar
                width 2rem
                height 2rem
                line-height 2rem
                border-radius 50%
</style>