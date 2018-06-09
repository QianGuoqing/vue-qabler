<template>
  <div class="store-card">
    <slot name="store-item"></slot>
    <div class="name">{{ name }}</div>
    <div class="brand">{{ brand }}</div>
    <div class="operation">
      <div class="price">{{ price }}</div>
      <q-button text="Add to cart">
        <a-icon type="plus" slot="icon"/>
      </q-button>
    </div>
  </div>
</template>

<script>
  import QButton from '../../../components/q-button/QButton.vue'
  export default {
    name: 'StoreCard',
    props: {
      name: {
        type: String,
        default: ''
      },
      brand: {
        type: String,
        default: ''
      },
      price: {
        type: String,
        default: ''
      }
    },
    components: {
      QButton
    }
  }
</script>

<style lang="stylus" scoped>
  .store-card
    background-color #fff
    text-align center
    padding 1rem
    border 1px solid rgba(0, 40, 100, 0.12)
    box-shadow 0 1px 2px 0 rgba(0, 0, 0, 0.05)
    margin-bottom 2rem
    img
      width 100%
    .name
      color #495057
      font-size 1.5rem
      margin-bottom 1rem
      cursor pointer
      &:hover
        text-decoration underline
    .brand
      color #9aa0ac
      font-size 0.875rem
      font-weight 400
      line-height 1.1
      text-align left 
      padding-left 0.8rem
      margin-bottom 1.5rem
    .operation
      display flex
      justify-content space-around
      align-items center
      .price
        font-size 1.5rem
        font-weight 600
</style>