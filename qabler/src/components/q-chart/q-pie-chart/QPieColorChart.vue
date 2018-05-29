<template>
  <div>
    <v-chart :force-fit="true" :height="height" :data="data">
      <v-tooltip />
      <v-sector position="year*population" color="year" :vStyle="sectorStyle" />
      <v-legend dataKey="year" position="right" :offsetX="-140" />
      <v-coord type="polar" />
    </v-chart>
  </div>
</template>

<script>
  const data = [
    { year: '2001', population: 41.8 },
    { year: '2002', population: 38 },
    { year: '2003', population: 33.7 },
    { year: '2004', population: 30.7 },
    { year: '2005', population: 25.8 },
    { year: '2006', population: 31.7 },
    { year: '2007', population: 33 },
    { year: '2008', population: 46 },
    { year: '2009', population: 38.3 },
    { year: '2010', population: 28 },
    { year: '2011', population: 42.5 },
    { year: '2012', population: 30.3 },
  ];
  export default {
    name: 'QPieColorChart',
    props: {
      data: {
        type: Array,
        default: function() {
          return data
        }
      },
      height: {
        type: Number,
        default: 300
      },
      sectorStyle: {
        type: Object,
        default: function() {
          return {
            stroke: "#fff",
            lineWidth: 1,
          }
        }
      }
    },
  }
</script>

<style scoped>

</style>