<template>
  <div>
    <form-wrapper title="Your vanity URL">
      <a-input defaultValue="mysite" slot="content">
        <a-select slot="addonBefore" defaultValue="Http://" style="width: 90px">
          <a-select-option value="Http://">Http://</a-select-option>
          <a-select-option value="Https://">Https://</a-select-option>
        </a-select>
        <a-select slot="addonAfter" defaultValue=".com" style="width: 80px">
          <a-select-option value=".com">.com</a-select-option>
          <a-select-option value=".jp">.jp</a-select-option>
          <a-select-option value=".cn">.cn</a-select-option>
          <a-select-option value=".org">.org</a-select-option>
        </a-select>
      </a-input>
    </form-wrapper>
  </div>
</template>

<script>
  import FormWrapper from '../../../components/FormWrapper.vue'
  export default {
    name: 'VanityUrl',
    components: {
      FormWrapper
    }
  }
</script>

<style scoped>
  
</style>