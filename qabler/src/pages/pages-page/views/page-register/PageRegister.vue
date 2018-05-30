<template>
  <div class="page-register">
    <div class="register">
      <q-raw-card style="width: 30%">
        <div style="width: 100%" slot="card-content">
          <div class="title">Login to your account</div>
          <form>
            <div class="form-group">
              <label class="form-label" for="">Name</label>
              <a-input placeholder="Enter name" />
            </div>
            <div class="form-group">
              <label class="form-label" for="">Email Address</label>
              <a-input placeholder="Enter email" />
            </div>
            <div class="form-group">
              <div class="form-head">
                <label class="form-label" for="">password</label>
              </div>
              <a-input placeholder="Password" />
            </div>
            <div class="form-group">
              <a-checkbox>Agreen the <a href="">terms and policy</a></a-checkbox>
            </div>
            <div class="form-button">
              <q-button block="btn-block" text="Create new account"></q-button>
            </div>
          </form>
        </div>
      </q-raw-card>
      <div class="extra">Already have account? <a href="">Sign In</a></div>
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
  .register
    display block
    margin 10px auto
    position relative
    .q-raw-card
      margin 0 auto
  .form-button
    margin-top 2rem

  .page-register
    width 100%
    height 100%
    .title
      font-size 1.125rem
      line-height 1.2
      font-weight 400
      margin-bottom 1rem
</style>