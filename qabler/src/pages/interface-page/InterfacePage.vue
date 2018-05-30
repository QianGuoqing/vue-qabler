<template>
  <div class="interface-page">
    <a-row>
      <a-col :span="2"></a-col>
      <a-col :span="20">
        <router-view></router-view>
      </a-col>
      <a-col :span="2"></a-col>
    </a-row>
  </div>
</template>

<script>
  export default {
    name: 'InterfacePage'
  }
</script>

<style lang="stylus" scoped>

</style>