<template>
  <div>
    <v-chart :forceFit="true" height="400" :data="data">
      <v-legend :reversed="true" />
      <v-tooltip :crosshairs="tooltipCrosshairs" />
      <v-axis :data-key="'Score'" :grid="null" />
      <v-axis dataKey="Class" :tick-line="null" subTickCount="1" :sub-tick-line="axisClassSubTickLine" :grid="axisClassGrid" />
      <v-point color="Grade" position="Class*Score" adjust="jitter" :size="4" :opacity="0.65" shape="circle" />
    </v-chart>
  </div>
</template>

<script>
  import * as $ from 'jquery';
  export default {
    name: 'QScatterDisturbChart',
    mounted() {
      $.getJSON('../../../../static/json/dv-grades.json', (data) => {
        this.$data.data = data;
      });
    },
    data() {
      return {
        data: [],
        tooltipCrosshairs: {
          type: 'cross'
        },
        axisClassGrid: {
          align: 'center',
          lineStyle: {
            stroke: '#8C8C8C',
            lineWidth: 1,
            lineDash: [3, 3],
          }
        },
        axisClassSubTickLine: {
          lineWidth: 1,
          stroke: '#BFBFBF',
          length: 4
        },
      };
    }
  }
</script>

<style scoped>
  
</style>