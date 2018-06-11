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
         <div class="development-list">
           <div class="development-wrapper">
             <development-activity></development-activity>
           </div>
           <div class="list-wrapper">
             <div class="list-item">
               <q-basic-alert text="Are you in trouble? Read our documentation with code samples."></q-basic-alert>
             </div>
             <div class="list-item">
               <q-basic-alert type="danger" text="Are you in trouble? Read our documentation with code samples."></q-basic-alert>
             </div>
             <div class="list-item">
               <q-basic-alert type="warning" text="Are you in trouble? Read our documentation with code samples."></q-basic-alert>
             </div>
             <div class="list-item">
               <q-basic-alert type="success" text="Are you in trouble? Read our documentation with code samples."></q-basic-alert>
             </div>
             <div class="progress-card-list">
               <div class="progress-item">
                 <progress-card title="New feedback" content="62" status="exception" :percent="30"></progress-card>
               </div>
               <div class="progress-item">
                 <progress-card title="Today profit" content="$652" status="active" :percent="30"></progress-card>
               </div>
             </div>
           </div>
         </div>
         <div class="user-table-list">
           <user-table></user-table>
         </div>
         <div class="invoice-table-list">
           <invoice-table></invoice-table>
         </div>
         <div class="brower-project-list">
           <div class="brower-list">
             <browser-list></browser-list>
           </div>
           <div class="project-list">
             <project-list></project-list>
           </div>
         </div>
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
  import DevelopmentActivity from './components/DevelopmentActivity.vue'
  import QBasicAlert from '../../components/q-alert/QBasicAlert.vue'
  import ProgressCard from './components/ProgressCard.vue'
  import InvoiceTable from './components/InvoiceTable.vue'
  import UserTable from './components/UserTable.vue'
  import BrowserList from './components/BrowserList.vue'
  import ProjectList from './components/ProjectList.vue'

  export default {
    name: 'HomePage',
    components: {
      StockCard,
      SaleCard,
      BlogList,
      QPieChart,
      QBasicLineChart,
      DevelopmentActivity,
      QBasicAlert,
      ProgressCard,
      InvoiceTable,
      UserTable,
      BrowserList,
      ProjectList
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
    .development-list
      margin-bottom 2rem
      display flex
      justify-content space-between
      .development-wrapper
        width 49%
      .list-wrapper
        width 49%
        .list-item
          margin-bottom 0.5rem
        .progress-card-list
          display flex
          justify-content space-between
          margin 2rem 0
          .progress-item
            width 49%
    .invoice-table-list
      margin-bottom 2rem
    .user-table-list
      margin-bottom 2rem
    .brower-project-list
      display flex
      justify-content space-between
      margin-bottom 2rem
      .brower-list
        width 49%
      .project-list
        width 49%
</style>