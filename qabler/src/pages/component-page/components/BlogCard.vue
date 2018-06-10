<template>
  <div class="blog-card">
    <slot name="blog-poster"></slot>
    <div class="title">{{ blog.title }}</div>
    <div class="content">{{ blog.content }}</div>
    <div class="personal">
      <div class="info">
        <slot name="blog-avatar"></slot>
        <div class="name-date">
          <div class="name">{{ blog.name }}</div>
          <div class="date">{{ blog.date}}</div>
        </div>
      </div>
      <div class="like">
        <a-icon type="heart-o"/>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'BlogCard',
    props: {
      blog: {
        type: Object,
        default() {
          return {}
        }
      },
    },
  }
</script>

<style lang="stylus" scoped>
  .blog-card
    background-color #fff
    padding 1rem
    border 1px solid rgba(0, 40, 100, 0.12)
    box-shadow 0 1px 2px 0 rgba(0, 0, 0, 0.05)
    border-radius 4px
    .blog-poster
      width 100%
      border-radius 4px
    .title
      font-size 1.125rem
      font-weight 600
      line-height 1.1
      margin 1rem 0
      cursor pointer
      color rgb(73, 80, 87)
      &:hover
        text-decoration underline
    .content
      color #9aa0ac
      margin-bottom 1.5rem
      font-size 15px
      line-height 20px
    .personal
      display flex
      justify-content space-between
      align-items center
      .info
        display flex
        align-items center
        .name-date
          margin-left 1.5rem
          .name
            color #495057
            font-size 15px
            font-weight 400
            cursor pointer
            &:hover
              text-decoration underline
          .date
            color #9aa0ac
            font-size 13px
      .like
        cursor pointer
        color #9aa0ac
        &:hover
          color #333
</style>