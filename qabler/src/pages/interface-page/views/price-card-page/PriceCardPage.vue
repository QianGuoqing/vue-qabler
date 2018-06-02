<template>
  <div class="price-card-page">
    <div class="title">Pricing cards</div>
    <div class="card-list">
      <q-price-card style="width: 24%" :price-detail="priceDetail1"></q-price-card>
      <q-price-card style="width: 24%" :price-detail="priceDetail2"></q-price-card>
      <q-price-card style="width: 24%" :price-detail="priceDetail3"></q-price-card>
      <q-price-card style="width: 24%" :price-detail="priceDetail4"></q-price-card>
    </div>
  </div>
</template>

<script>
  import QPriceCard from '../../../../components/q-price-card/QPriceCard.vue'
  export default {
    name: 'PriceCardPage',
    components: {
      QPriceCard
    },
    data() {
      return {
        priceDetail1: {
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
            },
            {
              privilege: false,
              text: 'Private Messages'
            },
            {
              privilege: false,
              text: 'Twitter API'
            }
          ],
          buttons: {
            color: 'btn-black',
            text: 'Choose plan'
          }
        },
        priceDetail2: {
          type: 'PREMIUM',
          price: 49,
          userCount: 10,
          desc: [
            {
              privilege: true,
              text: 'Sharing Tools'
            },
            {
              privilege: true,
              text: 'Design Tools'
            },
            {
              privilege: false,
              text: 'Private Messages'
            },
            {
              privilege: false,
              text: 'Twitter API'
            }
          ],
          buttons: {
            color: 'btn-primary',
            text: 'Choose plan'
          }
        },
        priceDetail3: {
          type: 'ENTERPRISE',
          price: 99,
          userCount: 100,
          desc: [
            {
              privilege: true,
              text: 'Sharing Tools'
            },
            {
              privilege: true,
              text: 'Design Tools'
            },
            {
              privilege: true,
              text: 'Private Messages'
            },
            {
              privilege: false,
              text: 'Twitter API'
            }
          ],
          buttons: {
            color: 'btn-green',
            text: 'Choose plan'
          }
        },
        priceDetail4: {
          type: 'UNLIMITED',
          price: 139,
          userCount: 'Unlimited',
          desc: [
            {
              privilege: true,
              text: 'Sharing Tools'
            },
            {
              privilege: true,
              text: 'Design Tools'
            },
            {
              privilege: true,
              text: 'Private Messages'
            },
            {
              privilege: true,
              text: 'Twitter API'
            }
          ],
          buttons: {
            color: 'btn-danger',
            text: 'Choose plan'
          }
        }
      }
    },
  }
</script>

<style lang="stylus" scoped>
  .price-card-page
    padding-bottom 3rem
    .title
      font-size 1.5rem
      line-height 2.5rem
      font-weight 400
      padding 1.5rem 0
    .card-list
      display flex
      flex-flow wrap
      justify-content space-between
</style>