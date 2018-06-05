<template>
  <div>
    <form-wrapper title="Valid state">
      <a-form slot="content">
        <a-form-item :labelCol="labelCol" label='Success' :wrapperCol="wrapperCol" hasFeedback validateStatus='success'>
          <a-input placeholder="I'm the content" id='success' />
        </a-form-item>
        <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label='' hasFeedback validateStatus='success'>
          <a-date-picker style="width: 100%" />
        </a-form-item>
      </a-form>
    </form-wrapper>
  </div>
</template>

<script>
  import FormWrapper from '../../../components/FormWrapper.vue'
  export default {
    name: 'ValidState',
    components: {
      FormWrapper
    },
    data() {
      return {
        labelCol: {
          xs: {
            span: 24
          },
          sm: {
            span: 5
          },
        },
        wrapperCol: {
          xs: {
            span: 30
          },
          sm: {
            span: 30
          },
        },
      }
    },
  }
</script>

<style scoped>
  
</style>