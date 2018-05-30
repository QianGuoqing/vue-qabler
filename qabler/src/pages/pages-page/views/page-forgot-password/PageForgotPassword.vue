<template>
  <div class="page-forgot-password">
    <div class="forgot-password">
      <q-raw-card style="width: 30%">
        <div style="width: 100%" slot="card-content">
          <div class="title">Forgot password</div>
          <form>
            <div class="form-group">
              <div class="text-muted">
                Enter your email address and your password will be reset and emailed to you.
              </div>
            </div>
            <div class="form-group">
              <label class="form-label" for="">Email Email</label>
              <a-input placeholder="Enter email" />
            </div>
            <div class="form-button">
              <q-button block="btn-block" text="Send me new password"></q-button>
            </div>
          </form>
        </div>
      </q-raw-card>
      <div class="extra">Forget it, <a href="">send me back</a> to the sign in screen.</div>
    </div>
  </div>
</template>

<script>
  import QRawCard from '../../../../components/q-card/QRawCard.vue'
  import QButton from '../../../../components/q-button/QButton.vue'
  export default {
    name: 'PageLogin',
    components: {
      QRawCard,
      QButton
    }
  }
</script>

<style lang="stylus" scoped>
  .text-muted
    font-size 15px
    color #9aa0ac
    margin-bottom 3rem
  .extra
    text-align center
    margin-top 1.5rem
  .form-label
    margin-bottom .375rem
    font-weight 600
    font-size 0.875rem
  .form-head
    display flex
    justify-content space-between
  .forgot-password
    display block
    margin 10px auto
    position relative
    .q-raw-card
      margin 0 auto
  .form-button
    margin-top 2rem

  .page-forgot-password
    width 100%
    height 100%
    .title
      font-size 1.125rem
      line-height 1.2
      font-weight 400
      margin-bottom 1rem
</style>