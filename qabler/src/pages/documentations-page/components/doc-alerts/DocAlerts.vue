<template>
  <div class="doc-alerts">
    <h1 class="title">Alerts</h1>
    <div class="desc">Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.</div>
    <div class="alert">
      <q-basic-alert :text="text1"></q-basic-alert>
    </div>

    <h1 class="title">Default alerts</h1>
    <div class="desc">Add color contextual class.</div>
    <div class="alert-panel">
      <div class="alert-item">
        <q-basic-alert :text="primary"></q-basic-alert>
      </div>
      <div class="alert-item">
        <q-basic-alert :text="secondary" type="secondary"></q-basic-alert>
      </div>
      <div class="alert-item">
        <q-basic-alert :text="success" type="success"></q-basic-alert>
      </div>
      <div class="alert-item">
        <q-basic-alert :text="info" type="info"></q-basic-alert>
      </div>
      <div class="alert-item">
        <q-basic-alert :text="warning" type="warning"></q-basic-alert>
      </div>
      <div class="alert-item">
        <q-basic-alert :text="danger" type="danger"></q-basic-alert>
      </div>
    </div>

    <h1 class="title">Alert with icon</h1>
    <div class="desc">Alert with icon</div>
    <div class="alert-panel">
      <div class="alert-item">
        <q-icon-alert :text="iconPrimary">
          <a-icon type="bell" slot="icon"/>
        </q-icon-alert>
      </div>
      <div class="alert-item">
        <q-icon-alert :text="iconSuccess" type="success">
          <a-icon type="check" slot="icon"/>
        </q-icon-alert>
      </div>
      <div class="alert-item">
        <q-icon-alert :text="iconDanger" type="danger">
          <a-icon type="warning" slot="icon"/>
        </q-icon-alert>
      </div>
    </div>

    <h1 class="title">Alert with actions</h1>
    <div class="desc">Alert with actions</div>
    <div class="alert-panel">
      <div class="alert-item">
        <q-action-alert :text="actionText1" type="success"></q-action-alert>
      </div>
      <div class="alert-item">
        <q-action-alert :text="actionText1" type="danger" enter-text="danger确认" cancel-text="danger取消"></q-action-alert>
      </div>
      <div class="alert-item">
        <q-action-alert :text="actionText1" type="primary" enter-text="primary 确认" cancel-text="primary 取消" :enter-handler="enterPrimary" :cancel-handler="cancelPrimary"></q-action-alert>
      </div>
      <div class="alert-item">
        <q-action-alert :text="actionText1" type="warning" enter-text="warning 确认" cancel-text="warning 取消"></q-action-alert>
      </div>
      <div class="alert-item">
        <q-action-alert :text="actionText1" type="info" enter-text="info 确认" cancel-text="info 取消"></q-action-alert>
      </div>
      <div class="alert-item">
        <q-action-alert :text="actionText1" type="secondary" enter-text="secondary 确认" cancel-text="secondary 取消"></q-action-alert>
      </div>
    </div>
  </div>
</template>

<script>
  import QBasicAlert from '../../../../components/q-alert/QBasicAlert.vue'
  import QIconAlert from '../../../../components/q-alert/QIconAlert.vue'
  import QActionAlert from '../../../../components/q-alert/QActionAlert.vue'
  export default {
    name: 'DocAlerts',
    components: {
      QBasicAlert,
      QIconAlert,
      QActionAlert
    },
    data() {
      return {
        text1: 'Work in progress! More detailed documentation is coming soon.',
        primary: 'This is a primary alert—check it out!',
        secondary: 'This is a secondary alert—check it out!',
        success: 'This is a success alert—check it out!',
        info: 'This is a info alert—check it out!',
        warning: 'This is a warning alert—check it out!',
        danger: 'This is a danger alert—check it out!',
        iconPrimary: 'You have done 5 actions.',
        iconSuccess: 'The page has been added.',
        iconDanger: 'The daily report has failed. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        actionText1: 'Lorem ipsum Minim ad pariatur eiusmod ea ut nulla aliqua est quis id dolore minim voluptate.'
      }
    },
    methods: {
      enterPrimary() {
        alert('传递事件 -> primary enter click')
      },
      cancelPrimary() {
        alert('传递事件 -> primary cancel click')
      }
    },
  }
</script>

<style lang="stylus" scoped>
  @import '../../../../common/stylus/variables.styl';

  .doc-alerts
    padding 1.5rem
    background-color #fff
    border 1px solid $color-border
    border-radius 4px
    .title
      color $color-text
      font-size 1.75rem
      font-weight 700
      margin-bottom 1rem
    .desc
      color $color-text
      font-size 1rem
      margin-bottom 1.5rem
    .alert
      margin-bottom 1rem
    .alert-panel
      padding 1rem
      background-color #fff
      border 1px solid $color-border
      border-radius 4px
      margin-bottom 2rem
      .alert-item
        margin-bottom 1rem
</style>