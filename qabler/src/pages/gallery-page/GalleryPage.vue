<template>
  <div class="gallery-page">
    <a-row>
      <a-col :span="2"></a-col>
      <a-col :span="20">
        <div class="gallery-header">
          <div class="gallery-info">
            <div class="title">Gallery</div>
            <div class="pages">1 - 12 of 1713 photos</div>
          </div>
          <div class="galler-operation">
            <a-select defaultValue="new" style="width: 120px">
              <a-select-option value="new">Newest</a-select-option>
              <a-select-option value="old">Oldest</a-select-option>
            </a-select>
            <a-input placeholder="search photo" style="width: 180px">
              <a-icon slot="prefix" type="search" />
            </a-input>
          </div>
        </div>
        <gallery-list :galleries="galleries"></gallery-list>
      </a-col>
      <a-col :span="2"></a-col>
    </a-row>
  </div>
</template>

<script>
  import GalleryList from './components/GalleryList.vue'
  export default {
    name: 'GalleryPage',
    components: {
      GalleryList
    },
    data() {
      return {
        galleries: [
          {
            poster: '../../../static/photos/adrian-infernus-281832-500.jpg',
            avatar: '../../../static/female/30.jpg',
            name: 'Nathan Guerrero',
            date: '12 days ago',
            watchCount: 112,
            likeCount: 42
          },
          {
            poster: '../../../static/photos/ales-krivec-107499-500.jpg',
            avatar: '../../../static/female/31.jpg',
            name: 'Alice Mason',
            date: '12 days ago',
            watchCount: 70,
            likeCount: 0
          },
          {
            poster: '../../../static/photos/alex-bertha-316137-500.jpg',
            avatar: '../../../static/female/32.jpg',
            name: 'Rose Bradley',
            date: '4 days ago',
            watchCount: 166,
            likeCount: 96
          },
          {
            poster: '../../../static/photos/anders-jilden-307322-500.jpg',
            avatar: '../../../static/female/29.jpg',
            name: 'Peter Richards',
            date: '18 days ago',
            watchCount: 76,
            likeCount: 6
          },
          {
            poster: '../../../static/photos/andrew-neel-141710-500.jpg',
            avatar: '../../../static/female/28.jpg',
            name: 'Wayne Holland',
            date: '126 days ago',
            watchCount: 106,
            likeCount: 36
          },
          {
            poster: '../../../static/photos/aneta-ivanova-776-500.jpg',
            avatar: '../../../static/female/27.jpg',
            name: 'Michelle Ross',
            date: '4 days ago',
            watchCount: 77,
            likeCount: 7
          },
          {
            poster: '../../../static/photos/anthony-intraversato-257182-500.jpg',
            avatar: '../../../static/female/26.jpg',
            name: 'Debra Beck',
            date: '6 days ago',
            watchCount: 150,
            likeCount: 80
          },
          {
            poster: '../../../static/photos/artem-sapegin-229391-500.jpg',
            avatar: '../../../static/female/25.jpg',
            name: 'Phillip Peters',
            date: '17 days ago',
            watchCount: 153,
            likeCount: 83
          },
          {
            poster: '../../../static/photos/bobby-burch-145906-500.jpg',
            avatar: '../../../static/female/24.jpg',
            name: 'Jack Ruiz',
            date: '15 days ago',
            watchCount: 143,
            likeCount: 43
          },
          {
            poster: '../../../static/photos/casey-horner-339165-500.jpg',
            avatar: '../../../static/female/23.jpg',
            name: 'Ronald Bradley',
            date: '11 days ago',
            watchCount: 149,
            likeCount: 79
          },{
            poster: '../../../static/photos/christoph-bengtsson-lissalde-80291-500.jpg',
            avatar: '../../../static/female/22.jpg',
            name: 'Bobby Knight',
            date: '6 days ago',
            watchCount: 160,
            likeCount: 90
          },
          {
            poster: '../../../static/photos/christian-joudrey-96208-500.jpg',
            avatar: '../../../static/female/21.jpg',
            name: 'Kathleen Harper',
            date: '16 days ago',
            watchCount: 164,
            likeCount: 94
          }
        ]
      }
    },
  }
</script>

<style lang="stylus" scoped>
  .gallery-page
    .gallery-header
      margin 2rem 0
      display flex
      justify-content space-between
      align-items center
      .gallery-info
        display flex
        align-items center
        .title
          font-size 1.5rem
          font-weight 600
        .pages
          color #6e7687 
          font-size 0.815rem
          margin-left 2rem
</style>