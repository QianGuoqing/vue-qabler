<template>
  <div class="page-profile">
    <a-row>
      <a-col :span="2"></a-col>
      <a-col :span="7">
        <profile-card></profile-card>
        <profile-tag></profile-tag>
        <profile-form></profile-form>
      </a-col>
      <a-col :span="1"></a-col>
      <a-col :span="12">
        <profile-chat></profile-chat>
        <edit-profile></edit-profile>
      </a-col>
      <a-col :span="2"></a-col>
    </a-row>
  </div>
</template>

<script>
  import ProfileCard from './views/ProfileCard.vue'
  import ProfileTag from './views/ProfileTag.vue'
  import ProfileForm from '../../../forms-page/views/profile/ProfileForm.vue'
  import ProfileChat from './views/ProfileChat.vue'
  import EditProfile from '../../../forms-page/views/edit/EditProfile.vue'
  export default {
    name: 'PageProfile',
    components: {
      ProfileCard,
      ProfileTag,
      ProfileForm,
      ProfileChat,
      EditProfile
    }
  }
</script>

<style lang="stylus" scoped>

</style>