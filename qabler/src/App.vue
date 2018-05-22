<template>
  <div id="app">
    <q-header></q-header>
    <q-tab></q-tab>
    <router-view></router-view>
  </div>
</template>

<script>
  import QHeader from './views/q-header/QHeader.vue'
  import QTab from './views/q-tab/QTab.vue'
  export default {
    name: 'App',
    components: {
      QHeader,
      QTab
    }
  }
</script>

<style>
  #app {
    background-color: #f5f7fb
  }
</style>
