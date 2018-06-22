<template>
  <div class="carousel-page">
    <a-row>
      <a-col :span="2"></a-col>
      <a-col :span="20">
        <div class="q-carousel-wrapper">
          <div class="q-carousel-item">
            <el-carousel trigger="click">
              <el-carousel-item v-for="image in images" :key="image">
                <img :src="image" alt="">
              </el-carousel-item>
            </el-carousel>
          </div>
          <div class="q-carousel-item">
            <el-carousel :interval="5000" arrow="always">
              <el-carousel-item v-for="image in images" :key="image">
                <img :src="image" alt="">
              </el-carousel-item>
            </el-carousel>
          </div>
          <div class="q-carousel-item">
            <el-carousel :interval="4000" type="card" height="200px">
              <el-carousel-item v-for="image in images" :key="image">
                <img :src="image" alt="">
              </el-carousel-item>
            </el-carousel>
          </div>
          <div class="q-carousel-item">
            <el-carousel :interval="4000" type="card" arrow="always" height="200px">
              <el-carousel-item v-for="image in images" :key="image">
                <img :src="image" alt="">
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
      </a-col>
      <a-col :span="2"></a-col>
    </a-row>
  </div>
</template>

<script>
  export default {
    name: 'CarouselPage',
    data() {
      return {
        images: [
          '../../../../static/photos/tim-marshall-173957-500.jpg',
          '../../../../static/photos/tim-bogdanov-97988-500.jpg',
          '../../../../static/photos/teddy-kelley-109202-500.jpg',
          '../../../../static/photos/tatyana-dobreva-288463-500.jpg'
        ]
      }
    },
  }
</script>

<style lang="stylus" scoped>
  .carousel-page
    .q-carousel-wrapper
      width 100%
      display flex
      justify-content space-between
      align-items center
      margin-top 2rem
      flex-flow wrap
      .q-carousel-item
        width 49%
        background-color #fff
        padding 1rem
        border 1px solid rgba(0, 40, 100, 0.12)
        box-shadow 0 1px 2px 0 rgba(0, 0, 0, 0.05)
        margin-bottom 2rem
        img 
          width 100%
</style>