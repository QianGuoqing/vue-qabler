<template>
  <div class="header">
    <div class="header-info">
      <a-row>
        <a-col :span="2"></a-col>
        <a-col :span="20">
          <div class="header-content">
            <div class="logo-wrapper">
              <img src="../../assets/images/brand/tabler.svg" class="logo" alt="">
            </div>
            <div class="info-wrapper">
              aaa
            </div>
          </div>
        </a-col>
        <a-col :span="2"></a-col>
      </a-row>
    </div>
    <div class="header-tab">
      <a-row>
        <a-col :span="2"></a-col>
        <a-col :span="20">
          
        </a-col>
        <a-col :span="2"></a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'QHeader'
  }
</script>

<style lang="stylus" scoped>
  .header
    .header-info
      .header-content
        display flex
        justify-content space-between
        .logo-wrapper
          display flex
          .logo
            height 2rem
</style>