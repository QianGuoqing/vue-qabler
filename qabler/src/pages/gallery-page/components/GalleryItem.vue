<template>
  <div class="gallery-item">
    <slot name="gallery-poster"></slot>
    <div class="info">
      <div class="avatar-name-date">
        <slot name="gallery-avatar"></slot>
        <div class="name-date">
          <div class="name">{{ gallery.name }}</div>
          <div class="date">{{ gallery.date }}</div>
        </div>
      </div>
      <div class="watch-like">
        <div class="watch">
          <a-icon type="eye-o"/>
          <span class="watch-count">{{ gallery.watchCount }}</span>
        </div>
        <div class="like">
          <a-icon type="heart-o"/>
          <span class="like-count">{{ gallery.likeCount }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'GalleryItem',
    props: {
      gallery: {
        type: Object,
        default() {
          return {}
        }
      }
    },
  }
</script>

<style lang="stylus" scoped>
  .gallery-item
    border 1px solid rgba(0, 40, 100, 0.12)
    box-shadow 0 1px 2px 0 rgba(0, 0, 0, 0.05)
    border-radius 4px
    padding 1rem
    .gallery-poster
      width 100%
      border-radius 4px
      border 1px solid rgba(0, 40, 100, 0.12)
    .info
      display flex
      justify-content space-between
      align-items center
      margin-top 0.5rem
      .avatar-name-date
        display flex
        justify-content space-between
        align-items center
        .name-date
          margin-left 10px
          .name
            color rgb(73, 80, 87)
            font-size 15px
            line-height 22.5px
          .date
            color #9aa0ac
            font-size 13px
            line-height 19px
      .watch-like
        display flex
        justify-content space-between
        align-items center
        color #9aa0ac
        font-size 15px
        line-height 22.5px
        .watch
          margin-right 10px
        .watch, .like
          cursor pointer
          &:hover
            color #333
</style>