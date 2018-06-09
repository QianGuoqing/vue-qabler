<template>
  <div class="compose-message">
    <q-card>
      <div slot="card-title">
        Compose new message
      </div>
      <div slot="card-body">
        <div class="email-item">
          <span>To: </span>
          <a-input style="width: 80%"/>
        </div>
        <div class="email-item">
          <span>Subject: </span>
          <a-input style="width: 80%"/>
        </div>
        <div class="email-area">
          <a-textarea :rows="10"></a-textarea>
        </div>
      </div>
      <div slot="card-footer">
        <div class="btn-wrapper">
          <q-button text="Cancel" color="btn-danger"></q-button>
          <q-button text="Send message" color="btn-primary"></q-button>
        </div>
      </div>
    </q-card>
  </div>
</template>

<script>
  import QCard from '../../../../../components/q-card/QCard.vue'
  import QButton from '../../../../../components/q-button/QButton.vue'
  export default {
    name: 'ComposeMessage',
    components: {
      QCard,
      QButton
    }
  }
</script>

<style lang="stylus" scoped>
  .compose-message
    margin 2rem 0
    .email-item 
      display flex
      justify-content space-between
      align-items center
      margin-bottom 1rem
    .btn-wrapper
      text-align right 
</style>