<template>
  <div>
    <form-wrapper title="Toggle switch">
      <div slot="content">
        <a-switch checkedChildren="开" unCheckedChildren="关" defaultChecked/>
        <br>
        <a-switch checkedChildren="1" unCheckedChildren="0" />
        <br>
        <a-switch defaultChecked>
          <a-icon type="check" slot="checkedChildren" />
          <a-icon type="cross" slot="unCheckedChildren" />
        </a-switch>
      </div>
    </form-wrapper>
  </div>
</template>

<script>
  import FormWrapper from '../../../components/FormWrapper.vue'
  export default {
    name: 'ToggleSwitch',
    components: {
      FormWrapper
    }
  }
</script>

<style scoped>
  
</style>