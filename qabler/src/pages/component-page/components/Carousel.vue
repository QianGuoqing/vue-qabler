<template>
  <div class="q-carousel" ref="qCarousel">
    <slot name="q-carousel"></slot>
  </div>
</template>

<script>
  export default {
    name: 'Carousel',
    props: {
      autoplay: {
        type: Boolean,
        default: false
      },
      inverval: {
        type: Number,
        default: 2000
      },
      needBulletin: {
        type: Boolean,
        default: false
      },
      needArrow: {
        type: Boolean,
        default: false
      }
    },
    mounted() {
      this._calculateTotalWidth()
    },
    methods: {
      _calculateTotalWidth() {
        let qCarousel = this.$refs['qCarousel']
        let carouselItems = Array.from(qCarousel.querySelectorAll('.q-carousel-item'))
        let cItemWrapper = qCarousel.querySelector('.q-carousel-item-wrapper')
        let realCarouselItemsLength = carouselItems.length
        let clonedFirstCItem = carouselItems[0].cloneNode(true)
        let clonedLastCItem = carouselItems[realCarouselItemsLength - 1].cloneNode(true)
        cItemWrapper.appendChild(clonedFirstCItem)
        cItemWrapper.insertBefore(clonedLastCItem, cItemWrapper.firstChild)
      }
    },
  }
</script>

<style lang="stylus" scoped>
  .q-carousel
    width 100%
    padding 1rem
    border 1px solid rgba(0, 40, 100, 0.12)
    box-shadow 0 1px 2px 0 rgba(0, 0, 0, 0.05)
    border-radius 4pxdsfas
    .q-carousel-item
      background-color #fff
      width 100%
      img
        width 100%
        display flex
</style>