<template>
  <div>
    <form-wrapper title="Beast">
      <a-select defaultValue="lucy" style="width: 100%" slot="content">
        <a-select-option value="jack">Jack</a-select-option>
        <a-select-option value="lucy">Lucy</a-select-option>
        <a-select-option value="disabled" disabled>Disabled</a-select-option>
        <a-select-option value="Yiminghe">yiminghe</a-select-option>
      </a-select>
    </form-wrapper>
  </div>
</template>

<script>
  import FormWrapper from '../../../components/FormWrapper.vue'
  export default {
    name: 'BeastSelect',
    components: {
      FormWrapper
    }
  }
</script>

<style scoped>
  
</style>