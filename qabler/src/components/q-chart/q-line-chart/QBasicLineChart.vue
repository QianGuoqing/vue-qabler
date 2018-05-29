<template>
  <div class="q-basic-line-chart">
    <v-chart :forceFit="true" :height="height" :data="data" :scale="scale">
      <v-tooltip />
      <v-axis />
      <v-line position="year*value" />
      <v-point position="year*value" shape="circle" />
    </v-chart>
  </div>
</template>

<script>
  export default {
    name: 'QBasicLineChart',
    props: {
      data: {
        type: Array,
        default: function() {
          return [
            { year: '1991', value: 3 },
            { year: '1992', value: 4 },
            { year: '1993', value: 3.5 },
            { year: '1994', value: 5 },
            { year: '1995', value: 4.9 },
            { year: '1996', value: 6 },
            { year: '1997', value: 7 },
            { year: '1998', value: 9 },
            { year: '1999', value: 13 }
          ]
        }
      },
      scale: {
        type: Array,
        default: function() {
          return [{
            dataKey: 'value',
            min: 0,
          },{
            dataKey: 'year',
            min: 0,
            max: 1,
          }]
        }
      },
      height: {
        type: Number,
        default: 300
      }
    },
  }
</script>

<style lang="stylus" scoped>

</style>