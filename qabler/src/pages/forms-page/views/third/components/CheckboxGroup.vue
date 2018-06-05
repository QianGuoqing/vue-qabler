<template>
  <div>
    <form-wrapper title="Radios">
      <div slot="content">
        <a-checkbox-group :options="plainOptions" v-model="value" />
        <br />
        <a-checkbox-group :options="plainOptions" :defaultValue="['Apple']" />
        <br />
        <a-checkbox-group :options="options" :value="['Pear']" />
        <br />
        <a-checkbox-group :options="optionsWithDisabled" disabled :defaultValue="['Apple']" />
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
    name: 'CheckboxGroup',
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