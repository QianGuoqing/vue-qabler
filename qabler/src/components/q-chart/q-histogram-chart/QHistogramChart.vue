<template>
  <div>
    <v-chart :forceFit="true" :height="height" :data="data" :scale="scale">
      <v-tooltip />
      <v-axis />
      <v-bar position="year*sales" />
    </v-chart>
  </div>
</template>

<script>
  const data = [
    { year: '1951 年', sales: 38 },
    { year: '1952 年', sales: 52 },
    { year: '1956 年', sales: 61 },
    { year: '1957 年', sales: 145 },
    { year: '1958 年', sales: 48 },
    { year: '1959 年', sales: 38 },
    { year: '1960 年', sales: 38 },
    { year: '1962 年', sales: 38 },
  ];
  
  const scale = [{
    dataKey: 'sales',
    tickInterval: 20,
  }];
  export default {
    name: 'QHistogramChart',
    props: {
      data: {
        type: Array,
        default: function() {
          return data
        }
      },
      scale: {
        type: Array,
        default: function() {
          return scale
        }
      },
      height: {
        type: Number,
        default: 300
      }
    },
  }
</script>

<style scoped>

</style>