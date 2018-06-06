<template>
  <div class="profile-tag">
    <div class="avatar-wrapper">
      <q-avatars size="avatar-xxl">
        <img src="../../../../../assets/images/faces/female/1.jpg" alt="" slot="avatar">
      </q-avatars>
    </div>
    <div class="info-wrapper">
      <div class="name">Juan Hernandez</div>
      <div class="job">Webdeveloper</div>
      <a-button shape="circle" icon="facebook" />
      <a-button shape="circle" icon="twitter" />
      <a-button shape="circle" icon="phone" />
      <a-button shape="circle" icon="skype" />
    </div>
  </div>
</template>

<script>
  import QAvatars from '../../../../../components/q-avatars/QAvatars.vue'
  export default {
    name: 'ProfileTag',
    components: {
      QAvatars
    }
  }
</script>

<style lang="stylus" scoped>
  .profile-tag
    margin-top 2rem
    border 1px solid rgba(0, 40, 100, 0.12)
    padding 1rem
    border-radius 4px
    display flex
    justify-content space-around
    align-items center
    background-color #fff
    .avatar-wrapper
      display flex
    .info-wrapper
      .name
        color #495057
        font-size 1.5rem
        font-weight 600
        margin-bottom 0.5rem
      .job
        color #9aa0ac
        font-size 15px
        margin-bottom 1rem
</style>