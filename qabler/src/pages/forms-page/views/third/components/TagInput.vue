<template>
  <div>
    <form-wrapper title="Tags">
      <a-select slot="content" mode="multiple" :defaultValue="['a1']" style="width: 100%" placeholder="Please select">
        <a-select-option v-for="i in 25" :key="(i + 9).toString(36) + i">{{(i + 9).toString(36) + i}}</a-select-option>
      </a-select>
    </form-wrapper>
  </div>
</template>

<script>
  import FormWrapper from '../../../components/FormWrapper.vue'
  export default {
    name: 'TagInput',
    components: {
      FormWrapper
    }
  }
</script>

<style scoped>
  
</style>