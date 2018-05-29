<template>
  <div>
    <v-chart :forceFit="true" :height="height" :data="data" :scale="scale">
      <v-tooltip />
      <v-axis />
      <v-legend />
      <v-line position="year*percent" :size="2" color="country" adjust="stack" />
      <v-stack-area position="year*percent" color="country" />
    </v-chart>
  </div>
</template>

<script>
  const DataSet = require('@antv/data-set');

  const sourceData = [
    { country: 'Asia', year: '1750', value: 502 },
    { country: 'Asia', year: '1800', value: 635 },
    { country: 'Asia', year: '1850', value: 809 },
    { country: 'Asia', year: '1900', value: 947 },
    { country: 'Asia', year: '1950', value: 1402 },
    { country: 'Asia', year: '1999', value: 3634 },
    { country: 'Asia', year: '2050', value: 5268 },
    { country: 'Africa', year: '1750', value: 106 },
    { country: 'Africa', year: '1800', value: 107 },
    { country: 'Africa', year: '1850', value: 111 },
    { country: 'Africa', year: '1900', value: 133 },
    { country: 'Africa', year: '1950', value: 221 },
    { country: 'Africa', year: '1999', value: 767 },
    { country: 'Africa', year: '2050', value: 1766 },
    { country: 'Europe', year: '1750', value: 163 },
    { country: 'Europe', year: '1800', value: 203 },
    { country: 'Europe', year: '1850', value: 276 },
    { country: 'Europe', year: '1900', value: 408 },
    { country: 'Europe', year: '1950', value: 547 },
    { country: 'Europe', year: '1999', value: 729 },
    { country: 'Europe', year: '2050', value: 628 },
  ];

  const dv = new DataSet.View().source(sourceData);
  dv.transform({
    type: 'percent',
    field: 'value',
    dimension: 'country',
    groupBy: ['year'],
    as: 'percent',
  });
  const data = dv.rows;

  const scale = [{
    dataKey: 'year',
    type: 'linear',
    tickInterval: 50,
  }, {
    dataKey: 'percent',
    formatter: function(value) {
      value = value || 0;
      value = value * 100;
      return parseInt(value);
    },
    alias: 'percent(%)',
  }];

  export default {
    name: 'QAreaPercentChart',
    data() {
      return {
        data,
        scale,
        height: 400,
      };
    }
  };
</script>

<style scoped>

</style>