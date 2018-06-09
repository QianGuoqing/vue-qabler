<template>
  <div class="gallery-list">
    <ul class="list">
      <li class="item" v-for="(gallery, index) in galleries" :key="index">
        <gallery-item :gallery="gallery">
          <img class="gallery-poster" slot="gallery-poster" :src="gallery.poster" alt="">
          <q-avatars size="avatar-lg" slot="gallery-avatar">
            <img :src="gallery.avatar" alt="" slot="avatar">
          </q-avatars>
        </gallery-item>
      </li>
    </ul>
  </div>
</template>

<script>
  import GalleryItem from './GalleryItem.vue'
  import QAvatars from '../../../components/q-avatars/QAvatars.vue'
  export default {
    name: 'GalleryList',
    components: {
      GalleryItem,
      QAvatars
    },
    props: {
      galleries: {
        type: Array,
        default() {
          return []
        }
      },
    },
  }
</script>

<style lang="stylus" scoped>
  .gallery-list
    .list
      display flex
      flex-flow wrap
      justify-content space-between
      .item
        width 32%
        margin-bottom 2rem
</style>