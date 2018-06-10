<template>
  <div class="home-page">
    <a-row>
      <a-col :span="2"></a-col>
      <a-col :span="20">
        <div class="title">
          Dashboard
        </div>
         <!-- <reverse-card percent="2%" content="27.3K" text="up 2%"></reverse-card> -->
         <ul class="stock-card-list">
           <li>
             <stock-card percent="6%" content="43" text="New Tickets"></stock-card>
           </li>
           <li>
             <stock-card :flag="false" percent="-3%" content="17" text="Closed Day"></stock-card>
           </li>
           <li>
             <stock-card percent="9%" content="7" text="New Replies"></stock-card>
           </li>
           <li>
             <stock-card percent="3%" content="27.3K" text="Followers"></stock-card>
           </li>
           <li>
             <stock-card :flag="false" percent="-2%" content="$95" text="Daily Earnings"></stock-card>
           </li>
           <li>
             <stock-card :flag="false" percent="-1%" content="621" text="Products"></stock-card>
           </li>
         </ul>
         <ul class="sale-card-list">
           <li class="sale-card-item">
             <sale-card count="132" text="Sales" content="12 waiting payments" color="primary">
               <a-icon type="pay-circle-o" slot="sale-icon"/>
             </sale-card>
           </li>
           <li class="sale-card-item">
             <sale-card count="78" text="Orders" content="32 shppied" color="success">
               <a-icon type="shopping-cart" slot="sale-icon"/>
             </sale-card>
           </li>
           <li class="sale-card-item">
             <sale-card count="1352" text="Members" content="163 registered today" color="danger">
               <a-icon type="usergroup-add" slot="sale-icon"/>
             </sale-card>
           </li>
           <li class="sale-card-item">
             <sale-card count="132" text="Comments" content="12 waiting" color="warning">
               <a-icon type="message" slot="sale-icon"/>
             </sale-card>
           </li>
         </ul>
         <div class="blog-list-wrapper">
           <blog-list :blogs="blogs" width="half"></blog-list>
         </div>
         <div class="chart-list">
           <div class="chart-item">
             <q-pie-chart></q-pie-chart>
           </div>
           <div class="chart-item">
             <q-basic-line-chart></q-basic-line-chart>
           </div>
         </div>
      </a-col>
      <a-col :span="2"></a-col>
    </a-row>
  </div>
</template>

<script>
  import StockCard from './components/StockCard.vue'
  import SaleCard from './components/SaleCard.vue'
  import BlogList from '../component-page/components/BlogList.vue'
  import QPieChart from '../../components/q-chart/q-pie-chart/QPieChart.vue'
  import QBasicLineChart from '../../components/q-chart/q-line-chart/QBasicLineChart.vue'
  export default {
    name: 'HomePage',
    components: {
      StockCard,
      SaleCard,
      BlogList,
      QPieChart,
      QBasicLineChart
    },
    data() {
      return {
        blogs: [
          {
            posterUrl: '../../../../static/photos/clarisse-meyer-122804-500.jpg',
            title: `And this isn't my nose. This is a false one.`,
            content: 'Look, my liege! The Knights Who Say Ni demand a sacrifice! …Are you suggesting that coconuts migr...',
            avatarUrl: '../../../../static/female/23.jpg',
            name: 'Rose Bradley',
            date: '3 days ago'
          },
          {
            posterUrl: '../../../../static/photos/cristina-gottardi-259243-500.jpg',
            title: `Well, I didn't vote for you.`,
            content: `Well, we did do the nose. Why? Shut up! Will you shut up?! You don't frighten us, English pig-dog...`,
            avatarUrl: '../../../../static/female/20.jpg',
            name: 'Peter Richards',
            date: '3 days ago'
          }
        ],
      }
    },
  }
</script>

<style lang="stylus" scoped>
  .home-page
    .title
      font-size 1.5rem
      line-height 2.5rem
      font-weight 600
      color rgb(73, 80, 87)
      margin 2rem 0
    .stock-card-list
      display flex
      justify-content space-between
      margin-bottom 2rem
    .sale-card-list
      display flex
      justify-content space-between
      margin-bottom 2rem
      .sale-card-item
        width 24%
    .chart-list
      display flex
      justify-content space-between
      margin-bottom 2rem
      .chart-item
        width 49%
        border 1px solid rgba(0, 40, 100, 0.12)
        box-shadow 0 1px 2px 0 rgba(0, 0, 0, 0.05)
        background-color #fff
        padding 1rem
        border-radius 4px
</style>