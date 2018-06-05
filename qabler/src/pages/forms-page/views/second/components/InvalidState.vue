<template>
  <div>
    <form-wrapper title="Invalid state">
      <a-form slot="content">
        <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label='Fail' validateStatus='error' help='Invalid feedback'>
          <a-input placeholder='unavailable choice' id='error' />
        </a-form-item>
        <a-form-item :labelCol="labelCol" :wrapperCol="wrapperCol" label='' hasFeedback validateStatus='error' help='Invalid feedback'>
          <a-input placeholder='unavailable choice' id='error' />
        </a-form-item>
      </a-form>
    </form-wrapper>
  </div>
</template>

<script>
  import FormWrapper from '../../../components/FormWrapper.vue'
  export default {
    name: 'InvalidState',
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
            span: 2
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