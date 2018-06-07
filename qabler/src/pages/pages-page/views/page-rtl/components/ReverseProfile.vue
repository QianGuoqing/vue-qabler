<template>
  <div class="reverse-profile">
    <div class="desc-wrapper">
      <div class="name-time">
        <div class="time">{{ time }}</div>
        <div class="name">
          <span class="title">{{ name }}</span>
          <span class="at">{{ at }}</span>
        </div>
      </div>
      <div class="content">{{ content }}</div>
      <div class="extra">
        <div class="notes">
          notes {{ noteCount }}
        </div>
        <div class="like-twitter">
          <span class="like">
            <a-icon type="heart-o" />
            {{ likeCount }}
          </span>
          <span class="twitter">
            <a-icon type="twitter" />
            {{ twitterCount }}
          </span>
          <a-icon type="link"/>
        </div>
      </div>
    </div>
    <div class="avatar-wrapper">
      <slot name="avatar-section"></slot>
    </div>
  </div>
</template>

<script>
  import QAvatars from '../../../../../components/q-avatars/QAvatars.vue'
  export default {
    name: 'ReverseProfile',
    components: {
      QAvatars
    },
    props: {
      time: {
        type: String,
        default: ''
      },
      name: {
        type: String,
        default: ''
      },
      at: {
        type: String,
        default: ''
      },
      content: {
        type: String,
        default: ''
      },
      noteCount: {
        type: Number,
        default: 0
      },
      likeCount: {
        type: Number,
        default: 0
      },
      twitterCount: {
        type: Number,
        default: 0
      }
    },
  }
</script>

<style lang="stylus" scoped>
  .reverse-profile
    margin 2rem 0
    box-shadow 0 1px 2px 0 rgba(0, 0, 0, 0.05)
    border 1px solid rgba(0, 40, 100, 0.12)
    background-color #fff
    display flex
    padding 1.5rem
    .desc-wrapper
      .name-time
        display flex
        justify-content space-between
        margin-bottom 1rem
        .time
          color #9aa0ac
          font-size 87.5%
        .name
          font-size 1rem
          font-weight 600
          line-height 1.1
        .at
          font-size 87.5%
          font-weight 400
      .content
        color #495057
        line-height 1.5
        font-weight 400
        margin-bottom 1rem
      .extra
        display flex
        justify-content space-between
        color #9aa0ac
        .notes
          color #9aa0ac
        .like-twitter
          .like
            margin-right 1rem
            transition all .3s
            cursor pointer
            &:hover
              opacity .8
          .twitter
            margin-right 1rem
            cursor pointer
            transition all .3s
            &:hover
              opacity .8
    .avatar-wrapper
      margin-left 1rem
</style>