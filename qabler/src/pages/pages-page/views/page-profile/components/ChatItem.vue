<template>
  <div class="chat-item">
    <div class="avatar-wrapper">
      <slot name="chat-avatar"></slot>
    </div>
    <div class="content-wrapper">
      <h5 class="name">{{ name }}</h5>
      <div class="content">{{ content }}</div>
    </div>
  </div>
</template>

<script>
  import QAvatars from '../../../../../components/q-avatars/QAvatars.vue'
  export default {
    name: 'ChatItem',
    components: {
      QAvatars
    },
    props: {
      name: {
        type: String,
        default: ''
      },
      content: {
        type: String,
        default: ''
      }
    },
  }
</script>

<style lang="stylus" scoped>
  .chat-item
    padding 1rem 0
    display flex
    border-bottom 1px solid rgba(0, 40, 100, 0.12)
    .avatar-wrapper
      margin-right 1rem
    .content-wrapper
      .name
        color #495057
      .content
        color #495057
        font-size 15px
        line-height 1.1
        font-weight normal
</style>