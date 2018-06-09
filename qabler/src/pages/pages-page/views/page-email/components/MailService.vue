<template>
  <div class="mail-service">
    <h3 class="title">Mail Service</h3>
    <a-menu style="width: 100%" :defaultSelectedKeys="['1']" :defaultOpenKeys="['sub1']" mode="inline">
      <a-menu-item key="1">
        <a-icon type="mail" /> Inbox
      </a-menu-item>
      <a-menu-item key="2">
        <a-icon type="message" /> Sent Mail
      </a-menu-item>
      <a-menu-item key="3">
        <a-icon type="warning" /> Important
      </a-menu-item>
      <a-menu-item key="4">
        <a-icon type="star" /> Starred
      </a-menu-item>
      <a-menu-item key="5">
        <a-icon type="file" /> Drafts
      </a-menu-item>
      <a-menu-item key="6">
        <a-icon type="tag" /> Tags
      </a-menu-item>
      <a-menu-item key="7">
        <a-icon type="trash" /> Trash
      </a-menu-item>
    </a-menu>
    <q-button class="email-btn" block="btn-block" text="Compose new Email"></q-button>
  </div>
</template>

<script>
  import QButton from '../../../../../components/q-button/QButton.vue'
  export default {
    name: 'MailService',
    components: {
      QButton
    }
  }
</script>

<style lang="stylus" scoped>
  .mail-service
    .title
      font-size 1rem
      margin 2rem 0 1.5rem 0
    .email-btn
      margin 1.5rem 0
</style>