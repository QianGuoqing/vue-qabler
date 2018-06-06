<template>
  <div class="profile-chat">
    <q-card>
      <div slot="card-title">
        <a-input-search placeholder="input search text">
          <a-button slot="enterButton" icon="camera-o"/>
        </a-input-search>
      </div>
      <div slot="card-body">
        <chat-item name="Peter Richards" :content="content1">
          <q-avatars slot="chat-avatar">
            <img slot="avatar" src="../../../../../assets/images/faces/female/14.jpg" alt="">
          </q-avatars>
        </chat-item>
        <chat-item name="Peter Richards" :content="content1">
          <q-avatars slot="chat-avatar">
            <img slot="avatar" src="../../../../../assets/images/faces/female/15.jpg" alt="">
          </q-avatars>
        </chat-item>
      </div>
      <div slot="card-footer">
        Chat profile
      </div>
    </q-card>
  </div>
</template>

<script>
  import QAvatars from '../../../../../components/q-avatars/QAvatars.vue'
  import QCard from '../../../../../components/q-card/QCard.vue'
  import ChatItem from '../components/ChatItem.vue'
  export default {
    name: 'ProfileChat',
    components: {
      QCard,
      QAvatars,
      ChatItem
    },
    data() {
      return {
        content1: 'Aenean lacinia bibendum nulla sed consectetur. Vestibulum id ligula porta felis euismod semper. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
      }
    },
  }
</script>

<style lang="stylus" scoped>

</style>