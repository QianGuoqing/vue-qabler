<template>
  <div class="store-list" >
    <ul class="list">
      <li v-for="(product, index) in products" :key="index">
        <store-item :product="product">
          <img class="poster" slot="item-poster" :src="product.posterUrl" alt="">
        </store-item>
      </li>
    </ul>
  </div>
</template>

<script>
  import StoreItem from '../components/StoreItem.vue'
  export default {
    name: 'StoreList',
    props: {
      products: {
        type: Array,
        default() {
          return []
        }
      },
    },
    components: {
      StoreItem
    }
  }
</script>

<style lang="stylus" scoped>
  .store-list
    margin-bottom 2rem
    border 1px solid rgba(0, 40, 100, 0.12)
    box-shadow 0 1px 2px 0 rgba(0, 0, 0, 0.05)
</style>