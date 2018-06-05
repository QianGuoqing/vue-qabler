<template>
  <div>
    <form-wrapper title="Radios">
      <div slot="content">
        <a-radio-group :options="plainOptions" :defaultValue="value1" />
        <br />
        <a-radio-group :options="options" v-model="value2" />
        <br />
        <a-radio-group :options="optionsWithDisabled" disabled v-model="value3" />
      </div>
    </form-wrapper>
  </div>
</template>

<script>
  import FormWrapper from '../../../components/FormWrapper.vue'
  const plainOptions = ['Apple', 'Pear', 'Orange']
  const options = [{
      label: 'Apple',
      value: 'Apple'
    },
    {
      label: 'Pear',
      value: 'Pear'
    },
    {
      label: 'Orange',
      value: 'Orange'
    },
  ]
  const optionsWithDisabled = [{
      label: 'Apple',
      value: 'Apple'
    },
    {
      label: 'Pear',
      value: 'Pear'
    },
    {
      label: 'Orange',
      value: 'Orange',
      disabled: false
    },
  ]
  export default {
    name: 'RadioGroup',
    components: {
      FormWrapper
    },
    data() {
      return {
        plainOptions,
        options,
        optionsWithDisabled,
        value1: 'Apple',
        value2: 'Apple',
        value3: 'Apple',
      }
    },
  }
</script>

<style scoped>
  
</style>