<template>
  <div class="doc-charts">
    <div class="title">线形图</div>
    <div class="chart-panel">
      <div class="chart-item">
        <q-card>
          <div slot="card-title">基础线形图</div>
          <div slot="card-body">
            <q-basic-line-chart></q-basic-line-chart>
          </div>
        </q-card>
      </div>
      <div class="chart-item">
        <q-card>
          <div slot="card-title">梯形图</div>
          <div slot="card-body">
            <q-gradient-chart></q-gradient-chart>
          </div>
        </q-card>
      </div>
    </div>

    <div class="title">柱状图</div>
    <div class="chart-panel">
      <div class="chart-item">
        <q-card>
          <div slot="card-title">简单柱状图</div>
          <div slot="card-body">
            <q-histogram-chart></q-histogram-chart>
          </div>
        </q-card>
      </div>
      <div class="chart-item">
        <q-card>
          <div slot="card-title">区间柱状图</div>
          <div slot="card-body">
            <q-interval-chart></q-interval-chart>
          </div>
        </q-card>
      </div>
      <div class="chart-item">
        <q-card>
          <div slot="card-title">瀑布图</div>
          <div slot="card-body">
            <q-waterful-chart></q-waterful-chart>
          </div>
        </q-card>
      </div>
    </div>

    <div class="title">饼图</div>
    <div class="chart-panel">
      <div class="chart-item">
        <q-card>
          <div slot="card-title">基础饼图</div>
          <div slot="card-body">
            <q-pie-chart></q-pie-chart>
          </div>
        </q-card>
      </div>
      <div class="chart-item">
        <q-card>
          <div slot="card-title">南丁格尔玫瑰图</div>
          <div slot="card-body">
            <q-pie-color-chart></q-pie-color-chart>
          </div>
        </q-card>
      </div>
    </div>

    <div class="title">点图</div>
    <div class="chart-panel">
      <div class="chart-item">
        <q-card>
          <div slot="card-title">散点图</div>
          <div slot="card-body">
            <q-scatter-chart></q-scatter-chart>
          </div>
        </q-card>
      </div>
      <div class="chart-item">
        <q-card>
          <div slot="card-title">多色散点图</div>
          <div slot="card-body">
            <q-scatter-color-chart></q-scatter-color-chart>
          </div>
        </q-card>
      </div>
      <div class="chart-item">
        <q-card>
          <div slot="card-title">扰动点图</div>
          <div slot="card-body">
            <q-scatter-disturb-chart></q-scatter-disturb-chart>
          </div>
        </q-card>
      </div>
      <div class="chart-item">
        <q-card>
          <div slot="card-title">气泡图</div>
          <div slot="card-body">
            <q-scatter-bubble-chart></q-scatter-bubble-chart>
          </div>
        </q-card>
      </div>
    </div>

    <div class="title">面积图</div>
    <div class="chart-panel">
      <div class="chart-item">
        <q-card>
          <div slot="card-title">基础面积图</div>
          <div slot="card-body">
            <q-area-chart></q-area-chart>
          </div>
        </q-card>
      </div>
      <div class="chart-item">
        <q-card>
          <div slot="card-title">堆叠面积图</div>
          <div slot="card-body">
            <q-area-heap-chart></q-area-heap-chart>
          </div>
        </q-card>
      </div>
      <div class="chart-item">
        <q-card>
          <div slot="card-title">百分比堆叠面积图</div>
          <div slot="card-body">
            <q-area-percent-chart></q-area-percent-chart>
          </div>
        </q-card>
      </div>
      <div class="chart-item">
        <q-card>
          <div slot="card-title">区间面积图</div>
          <div slot="card-body">
            <q-area-interval-chart></q-area-interval-chart>
          </div>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
  import QCard from '../../../../components/q-card/QCard.vue'
  import QBasicLineChart from '../../../../components/q-chart/q-line-chart/QBasicLineChart.vue'
  import QGradientChart from '../../../../components/q-chart/q-line-chart/QGradientChart.vue'
  import QHistogramChart from '../../../../components/q-chart/q-histogram-chart/QHistogramChart.vue'
  import QIntervalChart from '../../../../components/q-chart/q-histogram-chart/QIntervalChart.vue'
  import QWaterfulChart from '../../../../components/q-chart/q-histogram-chart/QWaterfulChart.vue'
  import QPieChart from '../../../../components/q-chart/q-pie-chart/QPieChart.vue'
  import QPieColorChart from '../../../../components/q-chart/q-pie-chart/QPieColorChart.vue'
  import QScatterChart from '../../../../components/q-chart/q-scatter-chart/QScatterChart.vue'
  import QScatterColorChart from '../../../../components/q-chart/q-scatter-chart/QScatterColorChart.vue'
  import QScatterDisturbChart from '../../../../components/q-chart/q-scatter-chart/QScatterDisturbChart.vue'
  import QScatterBubbleChart from '../../../../components/q-chart/q-scatter-chart/QScatterBubbleChart.vue'
  import QAreaChart from '../../../../components/q-chart/q-area-chart/QAreaChart.vue'
  import QAreaHeapChart from '../../../../components/q-chart/q-area-chart/QAreaHeapChart.vue'
  import QAreaPercentChart from '../../../../components/q-chart/q-area-chart/QAreaPercentChart.vue'
  import QAreaIntervalChart from '../../../../components/q-chart/q-area-chart/QAreaIntervalChart.vue'

  export default {
    name: 'DocCharts',
    components: {
      QCard,
      QBasicLineChart,
      QGradientChart,
      QHistogramChart,
      QIntervalChart,
      QWaterfulChart,
      QPieChart,
      QPieColorChart,
      QScatterChart,
      QScatterColorChart,
      QScatterDisturbChart,
      QScatterBubbleChart,
      QAreaChart,
      QAreaHeapChart,
      QAreaPercentChart,
      QAreaIntervalChart
    }
  }
</script>

<style lang="stylus" scoped>
  @import '../../../../common/stylus/variables.styl';

  .doc-charts
    padding 1.5rem
    background-color #fff
    border 1px solid $color-border
    border-radius 4px
    .title
      color $color-text
      font-size 1.75rem
      font-weight 700
      margin-bottom 1rem
      letter-spacing .02rem
    .desc
      color $color-text
      font-size 1rem
      margin-bottom 1.5rem
      letter-spacing .02rem
      line-height 1.5rem
    .chart-panel
      padding 1rem
      background-color #fff
      border 1px solid $color-border
      border-radius 4px
      margin-bottom 2rem
      .chart-item
        margin-bottom 10px
</style>