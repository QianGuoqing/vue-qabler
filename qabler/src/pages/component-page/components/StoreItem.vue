<template>
  <div class="store-item">
    <div class="poster-title">
      <slot name="item-poster"></slot>
      <div class="item-title">
        {{ product.title }}
        <span class="item-new" v-show="product.isNew">New</span>
      </div>
    </div>
    <div class="item-extra">
      <div class="reviews">{{ product.reviews }} reviews</div>
      <div class="offers">{{ product.offers }} offers</div>
      <div class="price">{{ product.price }}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'StoreItem',
    props: {
      product: {
        type: Object,
        default() {
          return {}
        }
      },
    },
  }
</script>

<style lang="stylus" scoped>
  .store-item
    background-color #fff
    display flex
    align-items center
    justify-content space-between
    border-bottom 1px solid rgba(0, 40, 100, 0.12)
    .poster-title
      display flex
      align-items center
      .poster
        width 60px
        height 64px
        margin  1rem
      .item-title
        color rgb(73, 80, 87)
        font-size 15px
        font-weight 400
        .item-new
          background-color rgb(233, 236, 239)
          color rgb(134, 142, 150)
          font-size 12px
          padding 3px 4.8px
          border-radius 4px
          margin-left 5px
    .item-extra
      display flex
      align-items center
      color rgb(154, 160, 172)
      font-size 15px
      .reviews, .offers, .price
        margin-right 1rem
      .price
        margin-right 2rem
        color rgb(73, 80, 87)
</style>