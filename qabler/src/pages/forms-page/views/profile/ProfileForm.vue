<template>
  <div class="profile-form">
    <q-card>
      <div slot="card-title">
        <div>My profile</div>
      </div>
      <div slot="card-body">
        <div class="avatar-email">
          <q-avatars size="avatar-lg">
            <img src="../../../../assets/images/faces/female/1.jpg" alt="" slot="avatar">
          </q-avatars>
          <div class="email">
            <form-wrapper title="Email-Address">
              <a-input slot="content" placeholder="Your email" />
            </form-wrapper>
          </div>
        </div>
        <div class="form-item">
          <form-wrapper title="Bio">
            <a-textarea :rows="6" slot="content"></a-textarea>
          </form-wrapper>
        </div>
        <div class="form-item">
          <form-wrapper title="Email-Address">
            <a-input slot="content" placeholder="Your email" />
          </form-wrapper>
        </div>
        <div class="form-item">
          <form-wrapper title="Password">
            <a-input slot="content" type="password" />
          </form-wrapper>
        </div>
        <div class="button-wrapper">
          <q-button text="Save" block="btn-block"></q-button>
        </div>
      </div>
      <div slot="card-footer">
        Profile
      </div>
    </q-card>
  </div>
</template>

<script>
  import QCard from '../../../../components/q-card/QCard.vue'
  import QAvatars from '../../../../components/q-avatars/QAvatars.vue'
  import QButton from '../../../../components/q-button/QButton.vue'
  import FormWrapper from '../../components/FormWrapper.vue'
  export default {
    name: 'ProfileForm',
    components: {
      QCard,
      QAvatars,
      QButton,
      FormWrapper
    }
  }
</script>

<style lang="stylus" scoped>
  .profile-form
    margin 2rem 0
    .avatar-email
      display flex
      align-items center
      justify-content space-between
      margin-bottom 1rem
      .email
        width 80%
    .form-item
      margin-bottom 1rem
    .button-wrapper
      margin-top 2rem
</style>