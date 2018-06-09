<template>
  <div class="store-page">
    <a-row>
      <a-col :span="2"></a-col>
      <a-col :span="20">
        <div class="title">
          Store components
        </div>
        <a-row>
          <a-col :span="6">
            <store-card name="Apple iPhone 7 Plus 256GB Red Special Edition" brand="Apple" price="$499">
              <img src="../../../assets/images/products/apple-iphone7-special.jpg" alt="" slot="store-item">
            </store-card>
            <store-card name="GoPro HERO6 Black" brand="GoPro" price="$599">
              <img src="../../../assets/images/products/gopro-hero.jpg" alt="" slot="store-item">
            </store-card>
          </a-col>
          <a-col :span="1"></a-col>
          <a-col :span="17">
            <store-list :products="products"></store-list>
          </a-col>
        </a-row>
      </a-col>
      <a-col :span="2"></a-col>
    </a-row>
  </div>
</template>

<script>
  import StoreCard from '../components/StoreCard.vue'
  import StoreList from '../components/StoreList.vue'
  export default {
    name: 'StorePage',
    components: {
      StoreCard,
      StoreList
    },
    data() {
      return {
        products: [
          {
            posterUrl: '../../../../static/products/apple-iphone7-special.jpg',
            title: 'Apple iPhone 7 Plus 256GB Red Special Edition',
            isNew: false,
            reviews: 98,
            offers: 38,
            price: '$499'
          },
          {
            posterUrl: '../../../../static/products/apple-macbook-pro.jpg',
            title: 'Apple MacBook Pro i7 3,1GHz/16/512/Radeon 560 Space Gray',
            isNew: true,
            reviews: 97,
            offers: 13,
            price: '$1499'
          },
          {
            posterUrl: '../../../../static/products/apple-iphone7.jpg',
            title: 'Apple iPhone 7 32GB Jet Black',
            isNew: false,
            reviews: 48,
            offers: 38,
            price: '$499'
          },
          {
            posterUrl: '../../../../static/products/gopro-hero.jpg',
            title: 'GoPro HERO6 Black',
            isNew: true,
            reviews: 66,
            offers: 47,
            price: '$599'
          },
          {
            posterUrl: '../../../../static/products/msi.jpg',
            title: 'MSI GV62 i5-7300HQ/8GB/1TB/Win10X GTX1050',
            isNew: false,
            reviews: 59,
            offers: 26,
            price: '$1599'
          },
          {
            posterUrl: '../../../../static/products/xiaomi-mi.jpg',
            title: 'Xiaomi Mi A1 64GB Black',
            isNew: true,
            reviews: 63,
            offers: 43,
            price: '$269'
          },
          {
            posterUrl: '../../../../static/products/huawei-mate.jpg',
            title: 'Huawei Mate 10 Pro Dual SIM Gray',
            isNew: false,
            reviews: 71,
            offers: 12,
            price: '$999'
          },
          {
            posterUrl: '../../../../static/products/sony-kd.jpg',
            title: 'Sony KD-49XE7005',
            isNew: true,
            reviews: 54,
            offers: 14,
            price: '$799'
          },
          {
            posterUrl: '../../../../static/products/samsung-galaxy.jpg',
            title: 'Samsung Galaxy A5 A520F 2017 LTE Black Sky',
            isNew: false,
            reviews: 37,
            offers: 40,
            price: '$399'
          }
        ]
      }
    },
  }
</script>

<style lang="stylus" scoped>
  .store-page
    .title
      margin 2rem 0
      font-size 1.5rem
      font-weight 400
</style>