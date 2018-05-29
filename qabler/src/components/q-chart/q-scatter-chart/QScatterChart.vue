<template>
  <div>
    <v-chart :forceFit="true" height="400" :data="data">
      <v-tooltip :showTitle="false" :crosshairs="tooltipCrosshairs" :itemTpl="tooltipItemTpl" />
      <v-axis />
      <v-point position="height*weight" :size="4" :opacity="0.65" :tooltip="pointTooltip" shape="circle" />
    </v-chart>
  </div>
</template>

<script>
  import * as $ from 'jquery'
  export default {
    mounted() {
       $.getJSON('../../../../static/json/scatter.json', (data) => {
        this.$data.data = data;
      });
    },
    data() {
      return {
        data: [],
        height: 500,
        pointTooltip: ['gender*height*weight', (gender, height, weight) => {
          return {
            name: gender,
            value: height + '(cm), ' + weight + '(kg)'
          };
        }],
        tooltipCrosshairs: { type: 'cross' },
        tooltipItemTpl: `
          <li data-index={index} style="margin-bottom:4px;">
            <span style="background-color:{color};" class="g2-tooltip-marker"></span>
            {name}<br />{value}
          </li>
        `,
      };
    }
  }
</script>

<style scoped>

</style>