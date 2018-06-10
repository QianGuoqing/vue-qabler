<template>
  <div class="blog-list">
    <ul class="list">
      <li class="list-item" :class="[width]" v-for="(blog, index) in blogs" :key="index">
        <blog-card :blog="blog">
          <img v-show="blog.posterUrl" :src="blog.posterUrl" slot="blog-poster" class="blog-poster" alt="">
          <q-avatars slot="blog-avatar" size="avatar-lg">
            <img :src="blog.avatarUrl" slot="avatar" alt="">
          </q-avatars>
        </blog-card>
      </li>
    </ul>
  </div>
</template>

<script>
  import BlogCard from './BlogCard.vue'
  import QAvatars from '../../../components/q-avatars/QAvatars.vue'
  export default {
    name: 'BlogList',
    components: {
      BlogCard,
      QAvatars
    },
    props: {
      blogs: {
        type: Array,
        default() {
          return []
        }
      },
      width: {
        type: String,
        default: ''
      }
    },
  }
</script>

<style lang="stylus" scoped>
  .blog-list
    .list
      display flex
      flex-flow wrap
      justify-content space-between
      .list-item
        margin-bottom 1.5rem
      .half
        width 49%
      .third
        width 32%
</style>