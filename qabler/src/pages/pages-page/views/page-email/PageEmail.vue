<template>
  <div class="page-email">
    <a-row>
      <a-col :span="2"></a-col>
      <a-col :span="20">
        <a-row>
          <a-col :span="8">
            <mail-service></mail-service>
          </a-col>
          <a-col :span="1"></a-col>
          <a-col :span="15">
            <compose-message></compose-message>
          </a-col>
        </a-row>
      </a-col>
      <a-col :span="2"></a-col>
    </a-row>
  </div>
</template>

<script>
  import MailService from './components/MailService.vue'
  import ComposeMessage from './components/ComposeMessage.vue'
  export default {
    name: 'PageEmail',
    components: {
      MailService,
      ComposeMessage
    }
  }
</script>

<style lang="stylus" scoped>

</style>