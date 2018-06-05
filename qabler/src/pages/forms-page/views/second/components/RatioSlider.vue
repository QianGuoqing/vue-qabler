<template>
  <div>
    <form-wrapper title="Ratios">
      <div slot="content">
        <a-row>
          <a-col :span="14">
            <a-slider :min="1" :max="20" v-model="inputValue1" />
          </a-col>
          <a-col :span="2"></a-col>
          <a-col :span="8">
            <a-input-number :min="1" :max="20" v-model="inputValue1" />
          </a-col>
          <a-col :span="2"></a-col>
        </a-row>
      </div>
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
        inputValue1: 1
      }
    },
  }
</script>

<style scoped>
  
</style>