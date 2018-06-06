<template>
  <div class="profile-card">
    <img src="../../../../../assets/images/photos/adrian-infernus-281832-500.jpg" class="poster-image" alt="">
    <div class="avatar">
      <q-avatars size="avatar-xxl">
        <img src="../../../../../assets/images/faces/female/1.jpg" alt="" slot="avatar">
      </q-avatars>
    </div>
    <div class="info">
      <div class="name">Peter Richards</div>
      <div class="desc">Big belly rude boy, million dollar hustler. Unemployed.</div>
      <div class="button-wrapper">
        <q-button text="follow" outline="btn-outline-primary">
          <a-icon type="twitter" slot="icon" />
        </q-button>
      </div>
    </div>
  </div>
</template>

<script>
  import QButton from '../../../../../components/q-button/QButton.vue'
  import QAvatars from '../../../../../components/q-avatars/QAvatars.vue'
  export default {
    name: 'ProfileCard',
    components: {
      QButton,
      QAvatars
    }
  }
</script>

<style lang="stylus" scoped>
  .profile-card
    position relative
    border 1px solid rgba(0, 40, 100, 0.12)
    border-radius 4px
    margin-top 2rem
    background-color #fff
    .poster-image
      width 100%
    .avatar
      position absolute
      left 50%
      transform translateX(-50%)
      top 198px
      border-radius 50%
      border 4px solid #fff
    .info
      margin-top 50px
      text-align center
      .name
        font-size 1.5rem
        line-height 1.1
        font-weight 600
        margin-bottom 1rem
      .desc
        margin 1.5rem auto
        width 60%
        color #495057
        font-size 15px
    .button-wrapper
      padding-bottom 1rem
</style>