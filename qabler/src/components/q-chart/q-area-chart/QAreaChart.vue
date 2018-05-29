<template>
  <div>
    <v-chart :forceFit="true" :height="height" :data="data" :scale="scale">
      <v-tooltip :crosshairs="{ type: 'line' }" />
      <v-axis dataKey="value" />
      <v-legend />
      <v-line position="year*value" :size="2" color="type" />
      <v-area position="year*value" color="type" />
    </v-chart>
  </div>
</template>

<script>
  const DataSet = require('@antv/data-set');
  const sourceData = [
    { year: '1996',  north: 322, south: 162 },
    { year: '1997',  north: 324, south: 90 },
    { year: '1998',  north: 329, south: 50 },
    { year: '1999',  north: 342, south: 77 },
    { year: '2000',  north: 348, south: 35 },
    { year: '2001',  north: 334, south: -45 },
    { year: '2002',  north: 325, south: -88 },
    { year: '2003',  north: 316, south: -120 },
    { year: '2004',  north: 318, south: -156 },
    { year: '2005',  north: 330, south: -123 },
    { year: '2006',  north: 355, south: -88 },
    { year: '2007',  north: 366, south: -66 },
    { year: '2008',  north: 337, south: -45 },
    { year: '2009',  north: 352, south: -29 },
    { year: '2010',  north: 377, south: -45 },
    { year: '2011',  north: 383, south: -88 },
    { year: '2012',  north: 344, south: -132 },
    { year: '2013',  north: 366, south: -146 },
    { year: '2014',  north: 389, south: -169 },
    { year: '2015',  north: 334, south: -184 },
  ];

  const dv = new DataSet.View().source(sourceData);
  dv.transform({
    type: 'fold',
    fields: ['north', 'south'],
    key: 'type',
    value: 'value',
  });
  const data = dv.rows;

  const scale = [{
    dataKey: 'year',
    min: 0,
    max: 1,
  }];
  export default {
    name: 'QAreaChart',
    data() {
      return {
        data,
        scale,
        height: 400,
      };
    }
  }
</script>

<style scoped>

</style>