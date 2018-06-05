<template>
  <div>
    <form-wrapper title="Input group buttons">
      <div slot="content" class="components-input-demo-presuffix">
        <a-input placeholder="Search" class="search">
          <a-icon slot="suffix" type="search"/>
        </a-input>

        <a-input placeholder="Username">
          <a-icon slot="prefix" type="user"/>
          <a-icon slot="suffix" type="close-circle"/>
        </a-input>
      </div>
    </form-wrapper>
  </div>
</template>

<script>
  import FormWrapper from '../FormWrapper.vue'
  export default {
    name: 'IconInput',
    components: {
      FormWrapper
    }
  }
</script>

<style scoped>
  .search {
    margin-bottom: 10px;
  }
</style>