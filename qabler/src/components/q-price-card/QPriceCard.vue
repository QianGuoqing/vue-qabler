<template>
  <div class="q-price-card">
    <q-raw-card>
      <div slot="card-content">
        <div class="price-card">
          <div class="price-type">{{ priceDetail.type }}</div>
          <div class="price">${{ priceDetail.price }}</div>
          <div class="user-count">
            <span class="count">{{ priceDetail.userCount }}</span>Users
          </div>
          <ul class="price-list">
            <li class="price-item" v-for="(item, index) in priceDetail.desc" :key="index">
              <a-icon style="color: green;" type="check" v-if="item.privilege"/>
              <a-icon style="color: red;" type="close" v-else/>
              <span class="desc-text">{{ item.text }}</span>
            </li>
          </ul>
          <q-button :text="priceDetail.buttons.text" :color="priceDetail.buttons.color"></q-button>
        </div>
      </div>
    </q-raw-card>
  </div>
</template>

<script>
  import QRawCard from '../q-card/QRawCard.vue'
  import QButton from '../q-button/QButton.vue'
  const data = {
    type: 'FREE',
    price: 0,
    userCount: 3,
    desc: [
      {
        privilege: true,
        text: 'Sharing Tools'
      },
      {
        privilege: false,
        text: 'Design Tools'
      }
    ],
    buttons: {
      color: 'btn-black',
      text: 'Choose plan'
    }
  }
  export default {
    name: 'QPriceCard',
    components: {
      QRawCard,
      QButton
    },
    props: {
      priceDetail: {
        type: Object,
        default: {}
      },
    },
  }
</script>

<style lang="stylus" scoped>
  .q-raw-card
    div
      width 100%

  .q-price-card
    text-align center
    transition all .3s
    &:hover
      box-shadow 0 0 2px #ccc
      transform translateY(-10px)
    .price-card
      padding-bottom 1rem
      .price-type
        font-size 0.875rem
        font-weight 600
        letter-spacing 0.05em
        margin 0 0 .5rem
      .price
        margin 1rem 0
        font-size 3.5rem
        line-height 1.1
        font-weight 300
      .user-count
        line-height 2
        font-size 15px
        .count
          font-weight 600
          padding-right 5px
      .price-list
        margin 1rem 0 3rem 0
        .price-item
          font-size 15px
          color #495057
          line-height 2rem
          font-weight normal
</style>